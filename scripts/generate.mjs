import config from '../packages/static/src/generateConfig.mjs';
import path from 'path';
import { appendFile, getFilename, makeDir, parseArgs, resetFile } from './helpers.mjs';

const { index, templates } = parseArgs();
const dist = './src/lib/icons';

if (!index) {
    throw '---> Missing index arg'
}

if (!templates?.length) {
    throw '---> Missing templates arg'
}

const templateFiles = templates.map(template => import("file://" + path.resolve(process.cwd(), template)))
const generators = await Promise.all(templateFiles).then(res => res.map((v, i) => ({ filename: getFilename(templates[i]), m: v.default })))
const indexGenerator = await import("file://" + path.resolve(process.cwd(), index))

config.forEach(app => {
    generators.forEach(generator => {
        const folderPath = path.resolve(process.cwd(), dist, app.name.toLocaleLowerCase());
        const filePath = path.resolve(folderPath, generator.filename.replace(/\[name\]/g, app.name));
        makeDir(folderPath);
        resetFile(filePath);
        appendFile(filePath, generator.m(app));
    })
})

const folderPath = path.resolve(process.cwd(), dist);
const filePath = path.resolve(folderPath, getFilename(index));
resetFile(filePath);
appendFile(filePath, indexGenerator.default(config))