import path from "node:path";
import { tasks, label, c } from "../utils.js";
import fs from "node:fs/promises";
import { sortLists } from "./utils/sortLists.js";

const readmePath = path.join(process.cwd(), "README.md");

/**
 * Checks whether README.md resources are alphabetically sorted.
 *
 * Exits the process with code 1 if sorting issues are detected.
 *
 * @returns {Promise<void>}
 */
export async function check() {
  const labels = {
    start: "Checking resource sorting...",
    end: "🎉 Good! Your PR is correctly sorted",
  };

  await tasks(labels, [
    {
      start: "Reading README.md...",
      pending: "Waiting to read README.md...",
      end: "README.md loaded successfully",

      async while() {
        await fs.access(readmePath);
      },
    },
    {
      start: "Validating resource order...",
      pending: "Checking if resources are sorted...",
      end: "Resources are sorted correctly",

      async while() {
        const original = await fs.readFile(readmePath, "utf8");

        const sorted = sortLists(original);

        if (original !== sorted)
          throw new Error(
            `${label("err", c.bgRed)}  Whoops! Resources are not sorted :(`,
          );
      },

      onError(error) {
        console.error(`\n${error.message}\n`);
        process.exit(1);
      },
    },
  ]);
}
