<script>
	import AllLinks from '$lib/AllLinks.svelte';

	let config = {
		size: 32,
		color: undefined,
		iconColor: 'white',
		bgStyle: '',
		borderRadius: 8,
		round: false
	};
</script>

<label style:display="block">
	<input type="checkbox" bind:checked={config.round} />
	round
</label>
<label>
	size
	<input type="number" bind:value={config.size} />
</label>
<label>
	borderRadius (used if round is false or not set)
	<input type="number" bind:value={config.borderRadius} min={0} disabled={config.round} />
</label>
<label>
	color (hex, rgb, html colors...)
	<input type="text" bind:value={config.color} />
</label>
<label>
	iconColor (hex, rgb, html colors...)
	<input type="text" bind:value={config.iconColor} />
</label>

<AllLinks {...config} />

<style>
	label {
		display: flex;
		flex-direction: column;
		margin: 8px 0;
	}
</style>
