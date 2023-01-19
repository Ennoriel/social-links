<script>
	import AllLinks from '$lib/AllLinks.svelte';
</script>

<div class="page">
    <div class="front">
        <AllLinks/>

        <AllLinks round/>

        <AllLinks color="#123456"/>
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
        padding: 32px;
        border-radius: 16px;
        background: white;
        box-shadow: 0 0 64px 8px #999;
    }
</style>