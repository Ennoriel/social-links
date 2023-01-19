<script>
	import AllLinks from '$lib/AllLinks.svelte';
	import EasyDesignConfiguration from './EasyDesignConfiguration.svelte';
	import SvelteComponent from '$lib/SvelteComponent.svelte';
	
	import componentList from '../../../static/src/generateConfig.mjs';

	import '$lib/style.css';
</script>

# social-links

[Github repository](https://github.com/Ennoriel/social-links) is a set of social media share links working with React and Svelte (at the moment). It takes another approach that most common libraries of that sort: it uses **links** instead of _third party scripts embedded in buttons_.

Please use it if you care for your user privacy.

It features:

- typescript support
- a11y:
  - links have aria-label
  - `:focus` css is up to you
- monorepo: it's easy to add a social media or a framework
- no tracking
- easily customizable:

<AllLinks/>

<AllLinks round/>

<AllLinks color="#123456"/>

Go ahead, try them out, it's working great!

Supported languages:

<div class="center">
  <img src="/framework/react.svg" alt="react icon"/> React

  <img src="/framework/svelte.svg" alt="svelte icon"/> Svelte
</div>

## Summary

- [Why another library to display sharing ~~buttons~~ links?](#why-another-library-to-display-sharing-buttons-links)
- [Installation](#installation)
- [Styling customization](#styling-customization)
- [Components](#component-props)

  <ul>
    {#each componentList as component}
      {@const name = component.name.toLocaleLowerCase()}
      <li>
        <a href="#{name}">{component.name}</a>
      </li>
    {/each}
  </ul>

- [Contribute](#contribute)
  - [Add a social media](#add-a-social-media)
  - [Add a framework](#add-a-framework)

## Why another library to display sharing ~~buttons~~ links?

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

- they are all button based while a link element (`<a href="">`) is enough
- they are not all well maintained
- they are all for only one framework

## Installation

<img src="/framework/react.svg" alt="react icon"/> React

```
npm i --save react-social-links
```

<br/>
<img src="/framework/svelte.svg" alt="svelte icon"/> Svelte

```
npm i --save-dev svelte-social-links
```

## Styling customization

<EasyDesignConfiguration/>

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

## Contribute

### Add a social media

1. add an entry to the object in the script `/packages/static/src/generateConfig.mjs`
2. add an entry in the `/packages/static/src/config` folder (I'll add the svg 😜)
3. if the new social media has a property which has never been used before, please, also update the `defaultValueForDoc` object in the same file

### Add a framework

It's still unclear if I will switch to [Mitosis](https://github.com/BuilderIO/mitosis) to support many framework at once.

In the mean time, you have to:

1. copy the `/packages/react` folder
2. configure the project:

- name, version, dependencies in `package.json`
- build in `rollup.config.mjs`

3. implement `Icon.tsx` and `Link.tsx`
4. implement the templates used to generate all the components in `/templates`
5. if you've made it so far, thank you so much, you can add the new framework support in the doc!
