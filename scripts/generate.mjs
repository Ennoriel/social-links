import config from '../packages/static/src/generateConfig.mjs';
import path from 'path';
import fs from 'fs';
import { appendFile, getFilename, makeDir, parseArgs, resetFile } from './helpers.mjs';

const templateDir = './templates';
const templates = fs.readdirSync(templateDir);
// const index =  "index.ts.js";
const dist = './src/lib/icons';

console.log(templates);

const templateFiles = templates.map((template) =>
	import('file://' + path.resolve(process.cwd(), templateDir, template))
);
const generators = await Promise.all(templateFiles).then((res) =>
	res.map((v, i) => ({ filename: getFilename(templates[i]), m: v.default }))
);
console.log(JSON.stringify({ l: config.length, config }));

config.forEach((app) => {
	generators.forEach((generator) => {
		const folderPath = path.resolve(process.cwd(), dist);
		const filePath = path.resolve(folderPath, generator.filename.replace(/\[name\]/g, app.name));
		resetFile(filePath);
		appendFile(filePath, generator.m({ app, config }));
	});
});

// if (templates.findIndex(t => t === index) >= 0) {
//     const indexGenerator = await import("file://" + path.resolve(process.cwd(), templateDir, index))
//     const folderPath = path.resolve(process.cwd(), dist);
//     const filePath = path.resolve(folderPath, getFilename(index));
//     resetFile(filePath);
//     appendFile(filePath, indexGenerator.default(config))
// }
