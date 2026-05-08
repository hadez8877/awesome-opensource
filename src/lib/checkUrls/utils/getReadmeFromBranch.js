import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

/**
 * Gets the content of the README.md file from the specified branch.
 *
 * @param {string} branch - The branch to get the README from (e.g., 'HEAD', 'origin/main').
 * @returns {Promise<string | null>} The content of the README file, or null if it doesn't exist or branch is invalid.
 * @example
 * const content = await getReadmeFromBranch('origin/main');
 * if (content) {
 *   console.log('README has', content.split('\n').length, 'lines');
 * }
 */
export async function getReadmeFromBranch(branch) {
	try {
		const { stdout } = await execAsync(`git show ${branch}:README.md`);
		return stdout;
	} catch {
		return null;
	}
}
