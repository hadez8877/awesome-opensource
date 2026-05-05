import { label, log, logger } from "../utils.js";
import { extractUrls } from "./utils/extractUrls.js";
import { checkUrl } from "./utils/checkUrl.js";
import { getReadmeFromBranch } from "./utils/getReadmeFromBranch.js";

/**
 * Checks for broken URLs in a PR by comparing the HEAD branch
 * against the base branch. Only validates new URLs added in the PR.
 *
 * @returns {Promise<void>} Exits with code 1 if invalid URLs are found.
 */
export async function checkUrls() {
  await logger.info("Starting URL check process...");

  const baseBranch = process.env.GITHUB_BASE_REF
    ? process.env.GITHUB_BASE_REF
    : "origin/main";

  const mainContent = await getReadmeFromBranch(baseBranch);
  if (!mainContent) {
    await logger.error(`Sorry, could not fetch ${baseBranch} branch`);
    process.exit(1);
  }

  const currentContent = await getReadmeFromBranch("HEAD");
  if (!currentContent) {
    await logger.error("Sorry, could not fetch current branch");
    process.exit(1);
  }

  const mainUrls = extractUrls(mainContent);
  const currentUrls = extractUrls(currentContent);

  const newUrls = currentUrls.filter((url) => !mainUrls.includes(url));

  if (newUrls.length === 0)
    return await logger.success("Look! No new URLs to check!");

  await logger.info(`Found ${newUrls.length} new URLs to check:`);

  const results = await Promise.all(newUrls.map(checkUrl));

  const valid = results.filter((r) => r.status).length;
  const invalid = results.filter((r) => !r.status).length;

  for (const r of results) {
    if (!r.status) {
      await logger.error(
        `The URL ${r.url} is not working (${r.error || r.statusCode})`,
      );
    }
  }

  log(
    `${label("results")}  Found ${valid} valid URLs and ${invalid} invalid URLs`,
  );

  if (invalid > 0) process.exit(1);
}
