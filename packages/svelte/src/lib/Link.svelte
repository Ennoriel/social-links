<script lang="ts">
	import Icon from '$lib/Icon.svelte';
    import { getUrl } from '$lib/utils';
    
    export let config: any;

    export let params: Record<string, string | undefined>;

    export let size = 32;
    export let color: string | undefined = undefined;
    export let iconFillColor = 'white';
    export let bgStyle: string | undefined = undefined;
    export let borderRadius: number | undefined = 12;
    export let round: boolean | undefined = undefined;

    export let target = "_blank";
</script>

<a href="{getUrl(config.url, params)}" style:height="{size}px" {target} aria-label="{`Share to ${config.name}`}" {...$$restProps}>
    <Icon {...config} {size} {color} {iconFillColor} {bgStyle} {borderRadius} {round}/>
</a>

<style>
    a {
        display: inline-block;
    }
</style>