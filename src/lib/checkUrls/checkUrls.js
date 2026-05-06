import { logger } from '../utils.js';
import { checkUrl } from './utils/checkUrl.js';
import { extractUrls } from './utils/extractUrls.js';
import { getReadmeFromBranch } from './utils/getReadmeFromBranch.js';

/**
 * Checks for broken URLs in a PR by comparing the HEAD branch
 * against the base branch. Only validates new URLs added in the PR.
 *
 * @returns {Promise<void>} Exits with code 1 if invalid URLs are found.
 */
export async function checkUrls() {
	await logger.info('Starting URL check process...');

	const isPush = !process.env.GITHUB_BASE_REF;
	const base = isPush ? 'HEAD^' : process.env.GITHUB_BASE_REF;

	let main = getReadmeFromBranch(base);

	if (!main) main = getReadmeFromBranch(`origin/${base}`);
	if (!main && isPush) main = getReadmeFromBranch('origin/main');

	if (!main) {
		await logger.error(`Sorry, could not fetch ${base} branch`);
		process.exit(1);
	}

	const current = getReadmeFromBranch('HEAD');

	if (!current) {
		await logger.error('Sorry, could not fetch current branch');
		process.exit(1);
	}

	const mainUrls = extractUrls(main);
	const currentUrls = extractUrls(current);

	const newUrls = currentUrls.filter((url) => !mainUrls.includes(url));

	if (!newUrls.length) return logger.success('Look! No new URLs to check!');

	await logger.info(`Found ${newUrls.length} new URLs to check`);

	const results = await Promise.all(newUrls.map(checkUrl));

	const validCount = results.filter((r) => r.status).length;
	const invalidCount = results.length - validCount;

	for (const result of results) {
		if (!result.status) {
			await logger.error(`The URL ${result.url} is not working (${result.error || result.statusCode})`);
		}
	}

	if (invalidCount > 0) {
		await logger.error(`Found ${invalidCount} invalid URLs. Please fix them before merging.`);
		process.exit(1);
	}

	await logger.success(`All ${validCount} new URLs are valid!`);
}
