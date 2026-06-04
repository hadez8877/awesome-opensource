import { readFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { README_PATH, logger } from './utils.js';

const execFileAsync = promisify(execFile);

const GITHUB_URL_REGEX = /https:\/\/github\.com\/[^\s)>\]"']+/g;

const eventName = process.env.GITHUB_EVENT_NAME;
const baseRef = process.env.GITHUB_BASE_REF?.trim();
const isPullRequest = eventName === 'pull_request' || eventName === 'pull_request_target';

const range = isPullRequest && baseRef ? `origin/${baseRef}...HEAD` : undefined;

/**
 * Extracts unique GitHub URLs from a block of text.
 * Strips trailing punctuation that isn't part of the URL.
 * @param {string} content
 * @returns {string[]}
 */
function extractUrls(content) {
	const matches = content.match(GITHUB_URL_REGEX) ?? [];
	return [...new Set(matches.map((url) => url.replace(/[.,;:!?]+$/, '')))];
}

/**
 * Returns the subset of `currentUrls` that appear in lines added
 * within the given git range. Skips URLs that were added then removed
 * in the same range by intersecting with the live README contents.
 * @param {string} range
 * @param {string[]} currentUrls
 * @returns {Promise<string[]>}
 */
async function getAddedUrls(range, currentUrls) {
	const { stdout } = await execFileAsync('git', ['diff', '--unified=0', range, '--', README_PATH]);
	const addedLines = stdout
		.split('\n')
		.filter((line) => line.startsWith('+') && !line.startsWith('+++'))
		.join('\n');
	const addedUrls = new Set(extractUrls(addedLines));
	return currentUrls.filter((url) => addedUrls.has(url));
}

/**
 * @typedef {{ url: string, status: number | null, ok: boolean }} CheckResult
 */

/**
 * Makes a HEAD request to the given URL.
 * Network errors and timeouts are caught and returned as failed results.
 * @param {string} url
 * @returns {Promise<CheckResult>}
 */
async function checkUrl(url) {
	try {
		const { status, ok } = await fetch(url, {
			method: 'HEAD',
			signal: AbortSignal.timeout(10_000)
		});
		return { url, status, ok };
	} catch {
		return { url, status: null, ok: false };
	}
}

async function run() {
	const content = await readFile(README_PATH, 'utf8');
	const currentUrls = extractUrls(content);
	const urlsToCheck = range ? await getAddedUrls(range, currentUrls) : currentUrls;

	if (urlsToCheck.length === 0) return logger.info('No URLs to check in the README');

	logger.info(`Checking ${urlsToCheck.length} URL(s)...`);

	const results = await Promise.all(urlsToCheck.map(checkUrl));
	const failures = results.filter(({ ok }) => !ok);

	for (const { url, status } of failures) {
		logger.error(`${status ?? 'Network Error'} - ${url}`);
	}

	if (failures.length > 0)
		throw new Error(
			`Whoops! ${failures.length} broken URL(s) found, please fix them before merging.`
		);

	logger.info('All URLs are valid, you can now merge!');
}

run().catch((err) => {
	logger.error(err);
	process.exit(1);
});
