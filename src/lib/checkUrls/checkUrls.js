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

  const isPush = !process.env.GITHUB_BASE_REF;
  const baseBranch = isPush ? "HEAD^" : process.env.GITHUB_BASE_REF;

  console.log("GITHUB_BASE_REF:", process.env.GITHUB_BASE_REF);
  console.log("isPush:", isPush);
  console.log("baseBranch:", baseBranch);

  let mainContent = getReadmeFromBranch(baseBranch);
  console.log("mainContent from baseBranch:", mainContent ? "found" : "null");
  if (!mainContent) {
    mainContent = getReadmeFromBranch(`origin/${baseBranch}`);
    console.log(
      "mainContent from origin/baseBranch:",
      mainContent ? "found" : "null",
    );
  }
  if (!mainContent && isPush) {
    mainContent = getReadmeFromBranch("origin/main");
    console.log(
      "mainContent from origin/main:",
      mainContent ? "found" : "null",
    );
  }

  if (!mainContent) {
    console.log("Error: could not fetch baseBranch, isPush=", isPush);
    process.exit(1);
  }

  const currentContent = getReadmeFromBranch("HEAD");
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

  const validUrlsCount = results.filter((result) => result.status).length;
  const invalidUrlsCount = results.filter((result) => !result.status).length;

  for (const result of results) {
    if (!result.status) {
      await logger.error(
        `The URL ${result.url} is not working (${result.error || result.statusCode})`,
      );
    }
  }

  log(
    `${label("results")}  Found ${validUrlsCount} valid URLs and ${invalidUrlsCount} invalid URLs`,
  );

  if (invalidUrlsCount > 0) process.exit(1);
}
