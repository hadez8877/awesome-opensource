import { getIndent } from './getIndent.js';
import { getSortKey } from './getSortKey.js';
import { isBulletLine } from './isBulletLine.js';

/**
 * Sorts markdown bullet lists in the given content alphabetically.
 *
 * Only contiguous bullet blocks with the same indentation level are sorted together.
 * Sorting is case-insensitive and uses locale-aware comparison.
 *
 * @param {string} content - The markdown content to sort
 * @returns {string} The content with sorted bullet lists
 * @example
 * const input = '- Apple\n- Banana\n- Apple\n';
 * const output = sortLists(input);
 * // Returns: '- Apple\n- Apple\n- Banana\n'
 */
export function sortLists(content) {
	const lines = content.split(/\r?\n/);

	/** @type {string[]} */
	const output = [];

	let index = 0;

	while (index < lines.length) {
		const line = lines[index];

		if (isBulletLine(line)) {
			const indent = getIndent(line);
			const start = index;

			index++;

			while (index < lines.length && isBulletLine(lines[index]) && getIndent(lines[index]) === indent) {
				index++;
			}

			const block = lines.slice(start, index);

			if (block.length > 1) {
				block.sort((a, b) =>
					getSortKey(a).localeCompare(getSortKey(b), 'en', {
						sensitivity: 'base',
					}),
				);
			}

			output.push(...block);
			continue;
		}

		output.push(line);
		index++;
	}

	return output.join('\n');
}
