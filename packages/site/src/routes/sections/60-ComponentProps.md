<script>
	import SvelteComponent from '$lib/SvelteComponent.svelte';
	import componentList from '../../../../static/src/generateConfig.mjs';
</script>

## Component props

### Styling props

All components have the same optional styling props:

| Props        | Type      | Default Value      | Usage                 |
| ------------ | --------- | ------------------ | --------------------- |
| color        | `string`  | social media color | icon background color |
| iconColor    | `string`  | `white`            | icon color            |
| borderRadius | `number`  | `8`                | border radius         |
| round        | `boolean` | `false`            | make the icon round   |
| size         | `number`  | `32`               | size of the icon      |

{#each componentList as component}
<SvelteComponent {...component}/>
{/each}