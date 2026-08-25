import { collectUrlErrors } from './utils.js';

async function checkReadmeURLs() {
	const errorReports = await collectUrlErrors();

	if (errorReports.length === 0) {
		console.log('URL validation was successful.');
		return;
	}

	const reportRows = errorReports.map((urlError) => ({
		url: urlError.url,
		status: urlError.status
	}));

	const plural = errorReports.length > 1;
	
	console.log(`Found ${plural ? 'these' : 'a'} broken URL${plural ? 's' : ''} in the README:`);
	console.table(reportRows);
	
	process.exit(1);
};

await checkReadmeURLs();
