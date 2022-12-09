<script>
	import AllLinks from '$lib/AllLinks.svelte';
	import EasyDesignConfiguration from './EasyDesignConfiguration.svelte';
	import SvelteComponent from '$lib/SvelteComponent.svelte';
	
	import componentList from '../../../static/src/generateConfig.mjs';

</script>

# sharly

Sharly is

## Introduction

### Why another library to display sharing buttons?

There are already countless ones:

- vanilla JS components:
  - [sharingbuttons.io](https://github.com/mxstbr/sharingbuttons.io)
  - [sharer.js](https://github.com/ellisonleao/sharer.js)
- react components:
  - [next-share](https://github.com/Bunlong/next-share)
  - [react-share](https://github.com/nygardk/react-share)
- svelte components:
  - [sveltekit-share-buttons](https://github.com/rodneylab/sveltekit-share-buttons)
  - [svelte-share-buttons-component](https://github.com/pchynoweth/svelte-share-buttons-component)

What they lack:

- they are all button based while a link element (`<a href="">`) is enough (some might argue that buttons are preferred since indexing robots will not go through them: that's false and most of the time that will break a non javascript environment)
- they are not all well maintained
- they are all for only one technology

### What this library is

- link based
- maintained
- mono-repo for many frameworks. If you need the components for another library, it's easy to add it
- no tracking
- a11y:
  - links have aria-label
  - `:focus` is up to you
- typescript

### The library features

<EasyDesignConfiguration/>

## Props

{#each componentList as component}
<SvelteComponent {...component}/>
{/each}
