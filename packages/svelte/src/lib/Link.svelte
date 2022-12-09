<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { getUrl, type Config } from 'static-link-share';

	export let config: Config;

	export let params: Record<string, string | undefined>;

	export let size = 32;
	export let color: string | undefined = undefined;
	export let iconColor = 'white';
	export let borderRadius: number | undefined = size * (6 / 32);
	export let round: boolean | undefined = undefined;

	export let rel = 'noreferrer noopener';
	export let target = '_blank';

	$: _color = color || config.color;
	$: _iconColor = iconColor === "brand" ? config.color : iconColor;
</script>

<a
	href={getUrl(config.url, params)}
	style:height={`${size}px`}
	{rel}
	{target}
	aria-label={`Share to ${config.name}`}
	style:border-radius="{round ? size / 2 : borderRadius}px"
	{...$$restProps}
>
	<Icon {...config} {size} color={_color} iconColor={_iconColor} {borderRadius} {round} />
</a>

<style>
	a {
		display: inline-block;
	}
</style>
