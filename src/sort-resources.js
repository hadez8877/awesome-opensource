import { check } from './lib/sortReadme/check.js';
import { sortReadme } from './lib/sortReadme/sortReadme.js';

const isCheckMode = process.argv.includes('--check');

if (isCheckMode) await check();
else await sortReadme();
