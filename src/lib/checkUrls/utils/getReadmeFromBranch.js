import { execSync } from "node:child_process";

/**
 * Gets the content of the README.md file from the specified branch.
 *
 * @param {string} branch - The branch to get the README from.
 * @returns {string | null} The content of the README file, or null if it doesn't exist.
 */
export function getReadmeFromBranch(branch) {
  try {
    return execSync(`git show ${branch}:README.md`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });
  } catch {
    return null;
  }
}
