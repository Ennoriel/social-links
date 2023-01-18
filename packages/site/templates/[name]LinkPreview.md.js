import { defaultValueForDoc } from '../../static/src/generateConfig.mjs';

export const formatProps = ({ key, propsName = key }) => {
	return `${propsName}=${defaultValueForDoc[propsName]}`;
};

export default ({ app: { name, args } }) =>
	`<script>
	import { ${name}Link } from 'svelte-social-link';
</script>

<div class="center">
	<${name}Link
		${args.map(formatProps).join('\n\t\t')}
	/>
</div>
`;
