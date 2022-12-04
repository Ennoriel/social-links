export default (config) =>
	config
		.map(
			({ name }) =>
				`export { default as ${name} } from './${name.toLocaleLowerCase()}/${name}.svelte';`
		)
		.join('\n');
