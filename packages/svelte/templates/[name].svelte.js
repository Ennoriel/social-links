const formatExport = ({ key, type, optional }) => {
	return `export let ${key}: ${type}${optional ? " | undefined" : ""}${optional ? " = undefined" : ""};`
}

const formatValue = ({ key, type, prefix }) => {
	return `$: _${key} = ${type.startsWith('Array') ? `${key}?.map?.(k => \`${prefix || ""}\${k}\`)?.join(',')` :  key};`
}

export default ({ name, args }) => `
<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { ${name.toLocaleLowerCase()} as config } from 'static-link-share';

	${args.map(formatExport).join('\n\t')}

	${args.map(formatValue).join('\n\t')}

	export let size: number | undefined = undefined;
	export let color: string | undefined = undefined;
	export let iconFillColor = 'white';
	export let bgStyle: string | undefined = undefined;
	export let borderRadius: number | undefined = undefined;
	export let round: boolean | undefined = undefined;
</script>

<Link
	params={{ ${args.map(({ key }) => `${key}: _${key}`).join(', ')} }}
	{config}
	{size}
	{color}
	{iconFillColor}
	{bgStyle}
	{borderRadius}
	{round}
	{...$$restProps}
/>
`;
