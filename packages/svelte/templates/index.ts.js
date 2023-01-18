export default ({ config }) =>
	config
		.map(({ name }) => `export { default as ${name}Link } from './${name}Link.svelte';`)
		.join('\n');
