export default ({ config }) =>
	config
		.map(({ name }) => `export { default as ${name}LinkCode } from './${name}LinkCode.md';`)
		.join('\n');
