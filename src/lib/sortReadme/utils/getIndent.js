/**
 * Extracts the indentation of a markdown bullet line.
 *
 * @param {string} line - Markdown list item.
 * @returns {string} Leading whitespace indentation.
 */
export function getIndent(line) {
  const match = line.match(/^(\s*)[-*]\s+/);
  return match?.[1] ?? "";
}
