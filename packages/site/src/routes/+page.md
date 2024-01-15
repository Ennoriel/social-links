<script>
	import sections from './sections'
	
	import '$lib/style.css';
</script>

{#each sections as section}
	<section>
		<svelte:component this={section}/>
	</section>
{/each}