<script>
	import { Facebook, HackerNews, LinkedIn, Reddit, Twitter } from '$lib';
</script>

<div>
	<Facebook u="https://svelte.dev/docs" hashtag={"lol"} {...$$restProps} />
	<HackerNews u="https://svelte.dev" t="Hell yeah" {...$$restProps} /> <!-- url, title -->
	<LinkedIn url="https://svelte.dev" {...$$restProps} /> <!-- title, summary, source not working -->
	<Reddit url="https://svelte.dev" title="looool looool" {...$$restProps} />
	<Twitter title="fgujnbnj #lul" hashtags={["lol", "lil"]} via="via" related="twitter:Twitter News,twitterapi:Twitter API News" in_reply_to="1599261195470372866" {...$$restProps} />
</div>


<!-- fgujnbnj #lul http://localhost:5173/ #lol #lil via @via -->