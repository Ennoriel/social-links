export default ({ config }) =>
	config.map(({ name }) => `export { ${name}Link } from './${name}Link';`).join('\n');
