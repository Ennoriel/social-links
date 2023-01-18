<script>
	import * as PreviewLinks from './icons/preview';
</script>

<div>
	{#each Object.values(PreviewLinks) as PreviewLink}
		<svelte:component this={PreviewLink} {...$$restProps} />
	{/each}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		gap: 8px;
		margin: 8px;
	}
</style>
