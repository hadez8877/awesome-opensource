import { isBulletLine } from "./isBulletLine.js";
import { getIndent } from "./getIndent.js";
import { getSortKey } from "./getSortKey.js";

/**
 * Sorts markdown lists in the given content
 * @param {string} content
 * @returns {string}
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

      while (
        index < lines.length &&
        isBulletLine(lines[index]) &&
        getIndent(lines[index]) === indent
      ) {
        index++;
      }

      const block = lines.slice(start, index);

      if (block.length > 1) {
        block.sort((a, b) =>
          getSortKey(a).localeCompare(getSortKey(b), "en", {
            sensitivity: "base",
          }),
        );
      }

      output.push(...block);
      continue;
    }

    output.push(line);
    index++;
  }

  return output.join("\n");
}
