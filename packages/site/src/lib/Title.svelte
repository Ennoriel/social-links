<script lang="ts">
	export let title: string;
	export let level: 'h3' | 'h4';

	$: id = title.toLocaleLowerCase().replace(/ /g, '-');
</script>

<svelte:element this={level} {id}>
	<a aria-hidden="true" tabindex="-1" href="#{id}">
		<span class="icon icon-link" />
	</a>
	{title}
</svelte:element>
