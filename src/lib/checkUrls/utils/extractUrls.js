/**
 * Extracts all HTTP/HTTPS URLs from the given README content.
 *
 * @param {string} readmeContent - The content of the README file.
 * @returns {string[]} An array of unique URLs found in the content.
 * @example
 * const content = 'Check out [GitHub](https://github.com) and [npm](https://npmjs.com)';
 * const urls = extractUrls(content);
 * // Returns: ['https://github.com', 'https://npmjs.com']
 */
export function extractUrls(readmeContent) {
	const httpUrlPattern = /https?:\/\/[^\s\)\]]+/;
	const foundUrls = readmeContent.match(httpUrlPattern) ?? [];

	return [...new Set(foundUrls)];
}
