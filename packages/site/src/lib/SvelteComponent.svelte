<script lang="ts">
	import * as Code from './icons/code';
	import * as Preview from './icons/preview';
	import Title from './Title.svelte';

	export let name: string;
	export let args: Array<{
		description: string;
		key: string;
		propsName?: string;
		type: string;
		optional?: boolean;
		prefix?: string;
	}>;
</script>

<Title level="h3" title={name} />

<svelte:component this={Preview[`${name}LinkPreview`]} />

<Title level="h4" title="{name} - how to use" />

<svelte:component this={Code[`${name}LinkCode`]} />

<Title level="h4" title="{name} - props" />

<table>
	<thead>
		<th>Props</th>
		<th>Render&nbsp;as</th>
		<th>Type</th>
		<th>Optional</th>
		{#if args.some((arg) => !!arg.prefix)}
			<th>Prefix</th>
		{/if}
		<th>Description</th>
	</thead>
	<tbody>
		{#each args as arg}
			<tr>
				<td>{arg.propsName ?? arg.key}</td>
				<td>{arg.key}</td>
				<td><code>{arg.type}</code></td>
				<td>{arg.optional ? 'Yes' : ''}</td>
				{#if args.some((arg) => !!arg.prefix)}
					<td>{arg.prefix ?? ''}</td>
				{/if}
				<td>{@html arg.description}</td>
			</tr>
		{/each}
	</tbody>
</table>
