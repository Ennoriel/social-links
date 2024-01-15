<script lang="ts">
	import AllLinks from '$lib/AllLinks.svelte';

	let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<div class="wrapper">
	<input type="radio" value="sm" bind:group={size} />
	<input type="radio" value="md" bind:group={size} />
	<input type="radio" value="lg" bind:group={size} />

	<div class="page {size}">
		<div class="front">
			<AllLinks size={size === 'lg' ? 64 : 32} />

			<AllLinks size={size === 'lg' ? 64 : 32} round />

			<AllLinks size={size === 'lg' ? 64 : 32} color="#123456" />
		</div>
	</div>
</div>

<style>
	.wrapper {
		position: absolute;
		inset: 0;
		background: #eee;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.page.sm {
		width: 640px;
		height: 320px;
	}

	.page.md {
		width: 1280px;
		height: 320px;
	}

	.page.lg {
		width: 1280px;
		height: 640px;
	}

	.page .front :global(div) {
		gap: 8px;
		margin: 4px 0;
	}

	.page.lg .front :global(div) {
		gap: 16px;
		margin: 8px 0;
	}

	.front {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		display: flex;
		flex-direction: column;
		padding: 32px;
		border-radius: 16px;
		background: white;
		box-shadow: 0 0 64px 8px #999;
	}
</style>
