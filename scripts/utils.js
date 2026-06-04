import pino from 'pino';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dt = new Intl.DateTimeFormat('en-us', {
	hour: '2-digit',
	minute: '2-digit'
});
export const logger = pino({
	level: process.env.LOG_LEVEL || 'info',
	timestamp: dt.format(new Date()),
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true
		}
	}
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const README_PATH = path.join(__dirname, '../README.md');
