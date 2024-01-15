<script>
	import AllLinks from '$lib/AllLinks.svelte';
</script>

# social-links

[social-links](https://github.com/Ennoriel/social-links) is a set of social media share links working with React and Svelte (at the moment). It takes another approach that most common libraries of that sort: it uses **links** instead of _third party scripts embedded in buttons_.

Please use it if you care for your user privacy. It features:

- typescript support
- a11y:
	- links have aria-label
	- `:focus` css is up to you
- monorepo: it's easy to add a social media or a framework
- no tracking
- easily customizable:

<AllLinks />

<AllLinks round />

<AllLinks color="#123456" />

Go ahead, try them out, it's working great!

Supported languages:

<div class="center">
	<img src="/framework/react.svg" alt="react icon" /> React

	<img src="/framework/svelte.svg" alt="svelte icon" /> Svelte
</div>
