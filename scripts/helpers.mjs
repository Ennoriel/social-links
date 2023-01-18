import path from 'path';
import fs from 'fs';

/**
 * Parse the process args into an object
 * [name] keys are parsed as array
 */
export const parseArgs = () =>
	Object.fromEntries(
		process.argv
			.slice(2)
			.map((arg) => arg.split('='))
			.map(([argKey, argVal]) => {
				if (argKey.startsWith('[') && argKey.endsWith(']')) {
					return [argKey.slice(1, -1), argVal.split(',')];
				} else {
					return [argKey, argVal];
				}
			})
	);

/**
 * Get the template filename
 *
 * @param {string} filePath
 */
export const getFilename = (filePath) => path.basename(filePath).split('.').slice(0, -1).join('.');

/**
 * Create a folder if it does not already exists
 *
 * @param {string} filePath
 */
export const makeDir = (filePath) => {
	if (!fs.existsSync(filePath)) {
		fs.mkdirSync(filePath);
	}
};

/**
 * Resets the file contents.
 *
 * @param {string} filePath
 */
export const resetFile = (filePath) => fs.writeFileSync(filePath, '', 'utf-8');

/**
 * append content to a file
 *
 * @param {string} filePath
 * @param {string} content
 */
export const appendFile = (filePath, content) => fs.appendFileSync(filePath, content, 'utf-8');
