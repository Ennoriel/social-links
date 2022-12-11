import config from '../packages/static/src/generateConfig.mjs';
import path from 'path';
import fs from 'fs';
import { appendFile, getFilename, resetFile } from './helpers.mjs';

const templateDir = './templates';
const templates = fs.readdirSync(templateDir);
const dist = './src/lib/icons';

const templateFiles = templates.map((template) =>
	import('file://' + path.resolve(process.cwd(), templateDir, template))
);
const generators = await Promise.all(templateFiles).then((res) =>
	res.map((v, i) => ({ filename: getFilename(templates[i]), m: v.default }))
);

config.forEach((app) => {
	generators.forEach((generator) => {
		const folderPath = path.resolve(process.cwd(), dist);
		const filePath = path.resolve(folderPath, generator.filename.replace(/\[name\]/g, app.name));
		resetFile(filePath);
		appendFile(filePath, generator.m({ app, config }));
	});
});
