import { defaultValueForDoc } from '../../static/src/generateConfig.mjs';

export const formatProps = ({ key, propsName = key }) => {
	return `${propsName}=${defaultValueForDoc[propsName]}`;
};

export default ({ app: { name, args } }) =>
	`<script>
	import { ${name}Link } from 'svelte-social-links';
</script>

<${name}Link
	${args.map(formatProps).join('\n\t\t')}
	{...$$restProps}
/>
`;
