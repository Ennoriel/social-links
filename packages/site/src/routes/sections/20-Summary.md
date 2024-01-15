<script>
	import componentList from '../../../../static/src/generateConfig.mjs';
</script>

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
