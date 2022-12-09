export default ({ config }) =>
	config.map(({ name }) => `export { default as ${name} } from './${name}.md';`).join('\n');
