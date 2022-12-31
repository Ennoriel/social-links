<script>
	import { Facebook, HackerNews, LinkedIn, Reddit, Twitter } from 'svelte-social-link';
</script>

<div>
	<Facebook u="https://svelte.dev/docs" hashtag={'lol'} {...$$restProps} />
	<HackerNews u="https://svelte.dev" t="Hell yeah" {...$$restProps} />
	<!-- url, title -->
	<LinkedIn url="https://svelte.dev" {...$$restProps} />
	<!-- title, summary, source not working -->
	<Reddit url="https://svelte.dev" title="looool looool" {...$$restProps} />
	<Twitter
		title="fgujnbnj #lul"
		hashtags={['lol', 'lil']}
		via="via"
		related="twitter:Twitter News,twitterapi:Twitter API News"
		in_reply_to="1599261195470372866"
		{...$$restProps}
	/>
</div>

<style>
	div {
		display: flex;
		gap: 8px;
		margin: 8px;
	}
</style>
