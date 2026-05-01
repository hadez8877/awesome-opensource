import fs from "node:fs/promises";
import path from "node:path";

import { tasks } from "../utils.js";
import { sortLists } from "./utils/sortLists.js";

const readmePath = path.join(process.cwd(), "README.md");

/**
 * Sorts markdown resource lists alphabetically inside README.md.
 *
 * Only contiguous bullet blocks with the same indentation level
 * are sorted together.
 *
 * @returns {Promise<void>}
 */
export async function sortReadme() {
  /** @type {string} */
  let original = "";

  /** @type {string} */
  let sorted = "";

  const labels = {
    start: "Sorting resources...",
    end: "🎉 Fantastic! Resources sorted successfully!",
  };

  await tasks(labels, [
    {
      start: "Reading README.md...",
      pending: "Waiting to read README.md...",
      end: "README.md loaded successfully",

      async while() {
        original = await fs.readFile(readmePath, "utf8");
      },
    },
    {
      start: "Sorting lists...",
      pending: "Waiting to sort lists...",
      end: "Lists sorted",

      async while() {
        sorted = sortLists(original);
      },
    },
    {
      start: "Rewriting README.md...",
      pending: "Waiting to rewrite README.md...",
      end: "README.md updated successfully",

      async while() {
        if (sorted === original) {
          return;
        }

        await fs.writeFile(readmePath, sorted, "utf8");
      },
    },
  ]);
}
