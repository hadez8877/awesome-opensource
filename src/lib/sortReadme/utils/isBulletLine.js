/**
 * Checks whether a line is a markdown bullet list item.
 *
 * Supports:
 * - item
 * * item
 *
 * @param {string} line - Line to validate.
 * @returns {boolean} Whether the line is a bullet item.
 */
export function isBulletLine(line) {
  return /^(\s*)[-*]\s+/.test(line);
}
