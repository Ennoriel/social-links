<script lang="ts">
	export let color: string;
	export let path: string;
	export let iconFillColor = 'white';
	export let bgStyle: string | undefined = undefined;
	export let borderRadius: number | undefined = 12;
	export let round: boolean | undefined = undefined;
	export let size: number | undefined = undefined;
</script>

<svg viewBox="0 0 64 64" width={size} height={size}>
	{#if round}
		<circle cx="32" cy="32" r="32" fill={color} style={bgStyle} />
	{:else}
		<rect width="64" height="64" rx={borderRadius} ry={borderRadius} fill={color} style={bgStyle} />
	{/if}

	<path d={path} fill={iconFillColor} />
</svg>
