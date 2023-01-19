<script>
	import { FacebookLink, HackerNewsLink, LinkedInLink, RedditLink } from 'svelte-social-link';
</script>

<div class="page">
    <div class="front">
        <FacebookLink/>
        <HackerNewsLink/>
        <LinkedInLink/>
        <RedditLink/>
    </div>
</div>

<style>
    .page {
        position: absolute;
        inset: 0;
        background: #eee;
    }

    .front {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: inline-block;
        padding: 2px;
        height: 68px;
        width: 68px;
        background: white;
        box-shadow: 0 0 64px 8px #999;
    }
</style>