const formatExport = ({ key, propsName = key, type, optional }) => {
	return `export let ${propsName}: ${type}${optional ? ' | undefined' : ''}${
		optional ? ' = undefined' : ''
	};`;
};

const formatValue = ({ key, propsName = key, type, prefix = '' }) => {
	return `$: _${key} = ${
		type.startsWith('Array')
			? `${propsName}?.filter(Boolean)?.map?.(k => \`${prefix}\${k}\`)?.join(',')`
			: `${propsName} ? \`${prefix}$\{${propsName}}\` : undefined`
	};`;
};

const shouldFormat = ({ type, prefix }) => type.startsWith('Array') || prefix;
const shouldNotFormat = (arg) => !shouldFormat(arg);

export default ({ app: { name, args } }) =>
	`<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { ${name.toLocaleLowerCase()} as config } from 'static-social-link';

	${args.map(formatExport).join('\n\t')}

	${args.filter(shouldFormat).map(formatValue).join('\n\t')}

	export let size: number | undefined = undefined;
	export let color: string | undefined = undefined;
	export let iconColor: string | undefined = undefined
	export let borderRadius: number | undefined = undefined;
	export let round: boolean | undefined = undefined;
</script>

<Link
	params={{ ${[
		...args.filter(shouldFormat).map(({ key }) => `${key}: _${key}`),
		...args
			.filter(shouldNotFormat)
			.map(({ key, propsName }) => (propsName ? `${key}: ${propsName}` : key))
	].join(', ')} }}
	{config}
	{size}
	{color}
	{iconColor}
	{borderRadius}
	{round}
	{...$$restProps}
/>
`;
