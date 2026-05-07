import fs from 'node:fs/promises';
import path from 'node:path';
import { logger, sendSeasonalMessage, tasks } from '../utils.js';
import { sortLists } from './utils/sortLists.js';

const readmePath = path.join(process.cwd(), 'README.md');

/**
 * Checks whether README.md resources are alphabetically sorted.
 *
 * Exits the process with code 1 if sorting issues are detected.
 *
 * @returns {Promise<void>}
 */
export async function check() {
	sendSeasonalMessage();

	const labels = {
		start: 'Checking resource sorting...',
		end: '🎉 Good! Your PR is correctly sorted',
	};

	await tasks(labels, [
		{
			start: 'Reading README.md...',
			pending: 'Waiting to read README.md...',
			end: 'README.md loaded successfully',

			async while() {
				await fs.access(readmePath);
			},
		},
		{
			start: 'Validating resource order...',
			pending: 'Checking if resources are sorted...',
			end: 'Resources are sorted correctly',

			async while() {
				const original = await fs.readFile(readmePath, 'utf8');

				const sorted = sortLists(original);

				if (original !== sorted) throw new Error('Whoops! Resources are not sorted :(');
			},

			async onError(err) {
				await logger.error(err.message);
				process.exit(1);
			},
		},
	]);
}
