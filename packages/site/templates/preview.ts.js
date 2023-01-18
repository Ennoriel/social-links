export default ({ config }) =>
	config
		.map(({ name }) => `export { default as ${name}LinkPreview } from './${name}LinkPreview.md';`)
		.join('\n');
