/**
 * Entry point for sorting resources in README.md.
 *
 * Usage:
 *   node src/sort-resources.js - Sort resources
 *   node src/sort-resources.js --check-mode - Check if resources are sorted
 *
 * @module sort-resources
 */
import { check } from './lib/sortReadme/check.js';
import { sortReadme } from './lib/sortReadme/sortReadme.js';

/** @type {boolean} - Whether the script is running in check mode */
const isCheckMode = process.argv.includes('--check-mode');

if (isCheckMode) await check();
else await sortReadme();
