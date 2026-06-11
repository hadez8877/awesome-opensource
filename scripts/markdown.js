import { readFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the project's README file.
export const README_PATH = path.join(__dirname, '../README.md');

const execFileAsync = promisify(execFile);

// Regex to match GitHub URLs in markdown content.
const GITHUB_URL_REGEX = /https:\/\/github\.com\/[^\s)>\]"']+/g;

const eventName = process.env.GITHUB_EVENT_NAME;
const baseRef = process.env.GITHUB_BASE_REF?.trim();
const isPullRequest = eventName === 'pull_request' || eventName === 'pull_request_target';

// Only scope to changed packages when CI runs in a PR context.
// On pushes or local runs we pass filters through unchanged.
const range = isPullRequest && baseRef ? `origin/${baseRef}...HEAD` : undefined;

/**
 * Extracts unique GitHub URLs from a block of text.
 * Strips trailing punctuation that isn't part of the URL.
 * @param {string} content
 * @returns {string[]}
 */
const extractUrls = (content) => {
	const matches = content.match(GITHUB_URL_REGEX) ?? [];
	return [...new Set(matches.map((url) => url.replace(/[.,;:!?]+$/, '')))];
};

/**
 * Returns the subset of `currentUrls` that appear in lines added
 * within the given git range. Skips URLs that were added then removed
 * in the same range by intersecting with the live README contents.
 * @param {string} range
 * @param {string[]} currentUrls
 * @returns {Promise<string[]>}
 */
const getAddedUrls = async (range, currentUrls) => {
	const { stdout } = await execFileAsync('git', ['diff', '--unified=0', range, '--', README_PATH]);
	const addedLines = stdout
		.split('\n')
		.filter((line) => line.startsWith('+') && !line.startsWith('+++'))
		.join('\n');
	const addedUrls = new Set(extractUrls(addedLines));
	return currentUrls.filter((url) => addedUrls.has(url));
};

/**
 * @typedef {{ url: string, status: number | null, ok: boolean }} CheckResult
 */

/**
 * Makes a HEAD request to the given URL.
 * Network errors and timeouts are caught and returned as failed results.
 * @param {string} url
 * @returns {Promise<CheckResult>}
 */
const checkUrl = async (url) => {
	try {
		const { status, ok } = await fetch(url, {
			method: 'HEAD',
			signal: AbortSignal.timeout(10000)
		});
		return { url, status, ok };
	} catch {
		return { url, status: null, ok: false };
	}
};

/**
 * Collects errors for all GitHub URLs found in the README.
 * In a PR context (when GITHUB_BASE_REF is set), only checks
 * URLs added in the current branch's diff range.
 * @returns {Promise<Array<{url: string, status: number | null}>>} Failed check results
 */
export const collectUrlErrors = async () => {
	const content = await readFile(README_PATH, 'utf8');
	const currentUrls = extractUrls(content);
	const urlsToCheck = range ? await getAddedUrls(range, currentUrls) : currentUrls;

	if (urlsToCheck.length === 0) return console.info('No URLs to check in the README');

	const results = await Promise.all(urlsToCheck.map(checkUrl));
	const urlErrors = results.filter(({ ok }) => !ok).flat();

	return urlErrors;
};
