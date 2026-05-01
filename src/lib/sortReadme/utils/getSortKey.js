/**
 * Extracts a normalized sorting key from a markdown list item.
 *
 * Prioritizes the visible text inside markdown links:
 * - [Project Name](url)
 *
 * Falls back to the raw bullet text if no link is found.
 *
 * @param {string} line - Markdown list item line.
 * @returns {string} Lowercased sorting key.
 */
export function getSortKey(line) {
  const trimmed = line.trimStart();

  const linkMatch = trimmed.match(/^[-*]\s+\[([^\]]+)\]/);

  if (linkMatch) {
    return linkMatch[1].trim().toLowerCase();
  }

  return trimmed.replace(/^[-*]\s+/, "").toLowerCase();
}
