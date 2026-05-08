/**
 * Entry point for checking URLs in README.md.
 *
 * Compares URLs in the current branch against the base branch
 * and validates any new URLs added in the PR.
 *
 * @module check-urls
 */
import { checkUrls } from './lib/checkUrls/checkUrls.js';

await checkUrls();
