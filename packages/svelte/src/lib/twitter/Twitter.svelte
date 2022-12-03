<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { twitter as config } from 'link-share-static';

	export let title: string | undefined = undefined;

	export let size = 32;
	export let color: string | undefined = undefined;
	export let iconFillColor = 'white';
	export let bgStyle: string | undefined = undefined;
	export let borderRadius: number | undefined = 12;
	export let round: boolean | undefined = undefined;
</script>

<Link
	params={{ title }}
	{config}
	{size}
	{color}
	{iconFillColor}
	{bgStyle}
	{borderRadius}
	{round}
	{...$$restProps}
/>
