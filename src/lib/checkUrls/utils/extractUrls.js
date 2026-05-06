/**
 * Extracts all URLs from the given README content.
 *
 * @param {string} readmeContent - The content of the README file.
 * @returns {string[]} An array of unique URLs found in the content.
 */
export function extractUrls(readmeContent) {
	const httpUrlPattern = /https?:\/\/[^\s\)\]]+/g;
	const foundUrls = readmeContent.match(httpUrlPattern) || [];

	return [...new Set(foundUrls)];
}
