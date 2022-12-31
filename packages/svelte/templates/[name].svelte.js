const formatExport = ({ key, propsName = key, type, optional }) => {
	return `export let ${propsName}: ${type}${optional ? ' | undefined' : ''}${
		optional ? ' = undefined' : ''
	};`;
};

const formatValue = ({ key, propsName = key, type, prefix = '' }) => {
	return `$: _${key} = ${
		type.startsWith('Array')
			? `${propsName}?.map?.(k => \`${prefix}\${k}\`)?.join(',')`
			: prefix
			? `\`${prefix}$\{${propsName}}\``
			: propsName
	};`;
};

export default ({ app: { name, args } }) => `
<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { ${name.toLocaleLowerCase()} as config } from 'static-social-link';

	${args.map(formatExport).join('\n\t')}

	${args.map(formatValue).join('\n\t')}

	export let size: number | undefined = undefined;
	export let color: string | undefined = undefined;
	export let iconColor = 'white';
	export let borderRadius: number | undefined = undefined;
	export let round: boolean | undefined = undefined;
</script>

<Link
	params={{ ${args.map(({ key }) => `${key}: _${key}`).join(', ')} }}
	{config}
	{size}
	{color}
	{iconColor}
	{borderRadius}
	{round}
	{...$$restProps}
/>
`;
