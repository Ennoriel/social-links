export default ({ name, args }) => `
<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { ${name.toLocaleLowerCase()} as config } from 'static-link-share';

	${args.map(({ key, type }) => `export let ${key}: ${type};`).join('\n\t')}

	export let size = 32;
	export let color: string | undefined = undefined;
	export let iconFillColor = 'white';
	export let bgStyle: string | undefined = undefined;
	export let borderRadius: number | undefined = 12;
	export let round: boolean | undefined = undefined;
</script>

<Link
	params={{ ${args.map(({ key }) => key).join(', ')} }}
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
