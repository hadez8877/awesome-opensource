import { readFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the project's README file.
export const readmePath = path.join(__dirname, '../README.md');

const execFileAsync = promisify(execFile);

// Regex to match GitHub URLs in markdown content.
const GITHUB_URL_REGEX = /https:\/\/github\.com\/[^\s)>\]"']+/g;

const eventName = process.env.GITHUB_EVENT_NAME;
const baseRef = process.env.GITHUB_BASE_REF?.trim();
const isPullRequest = eventName === 'pull_request' || eventName === 'pull_request_target';

// Only scope to changed packages when CI runs in a PR context.
// On pushes or local runs we pass filters through unchanged.
const range = isPullRequest && baseRef ? `origin/${baseRef}...HEAD` : undefined;

const extractUrls = (content) => {
	const matches = content.match(GITHUB_URL_REGEX) ?? [];
	return [...new Set(matches.map((url) => url.replace(/[.,;:!?]+$/, '')))];
};

/**
 * Returns the subset of `currentUrls` that were added in the given git range.
 * When range is empty, checks uncommitted changes.
 */
async function getAddedUrls(range, currentUrls) {
	const args = range
		? ['diff', '--unified=0', range, '--', readmePath] // If is a PR, check the diff
		: ['diff', '--unified=0', '--', readmePath]; // If is not a PR, check uncommitted changes

	const { stdout } = await execFileAsync('git', args);
	const addedLines = stdout
		.split('\n')
		.filter((line) => line.startsWith('+') && !line.startsWith('+++'))
		.join('\n');
	const addedUrls = new Set(extractUrls(addedLines));

	return currentUrls.filter((url) => addedUrls.has(url));
};

async function checkUrl(url) {
	return Promise.race([
		fetch(url, { method: 'HEAD' })
			.then(({ status, ok }) => ({ url, status, ok })),
		new Promise((resolve) => {
			setTimeout(() => resolve({ url, status: undefined, ok: false }), 10000);
		})
	])
		.catch(() => ({ url, status: undefined, ok: false }));
};

/**
 * Collects errors for all GitHub URLs found in the README.
 * In a PR context (when GITHUB_BASE_REF is set), only checks URLs added in the current branch's diff range.
 * In local context, only checks URLs in uncommitted changes.
 */
export async function collectUrlErrors() {
	const content = await readFile(readmePath, 'utf8');
	const currentUrls = extractUrls(content);
	const urlsToCheck = await getAddedUrls(range ?? '', currentUrls);

	if (urlsToCheck.length === 0) {
		console.info('No URLs to check in the README');
		return [];
	}

	const results = await Promise.all(urlsToCheck.map(checkUrl));
	const urlErrors = results.filter(({ ok }) => !ok).flat();

	return urlErrors;
};
