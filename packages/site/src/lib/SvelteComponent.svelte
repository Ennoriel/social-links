<script lang="ts">
    import * as X from 'svelte-link-share';
    import * as Y from './icons';
    import { defaultValueForDoc } from '../../../static/src/generateConfig.mjs';
    
    export let api: string | undefined = undefined;
    export let name: string;
    export let args: Array<{
        description: string,
        key: string,
        propsName?: string;
        type: string,
        optional?: boolean,
        prefix?: string
    }>;
</script>

<h3>{name}</h3>

<h4>notice</h4>

{#if api}
    <p>
        You can check the <a href="{api}" rel="noreferrer noopener">official documentation</a> online.
    </p>
{:else}
    <p>
        The documentation has not be found online or is not documented because {name} prefer you to use third party script that will track the users.
    </p>
    <p>
        If the documentation exists and you have found it, please submit an issue or a PR!
    </p>
{/if}

<h4>Props</h4>

<table>
    <thead>
        <th>Props</th>
        <th>Render&nbsp;as</th>
        <th>Type</th>
        <th>Optional</th>
        {#if args.some(arg => !!arg.prefix)}
            <th>Prefix</th>
        {/if}
        <th>Description</th>
    </thead>
    <tbody>
        {#each args as arg}
            <tr>
                <td>{arg.propsName ?? arg.key}</td>
                <td>{arg.key}</td>
                <td><code>{arg.type}</code></td>
                <td>{arg.optional ? "Yes" : ""}</td>
                {#if args.some(arg => !!arg.prefix)}
                    <td>{arg.prefix ?? ""}</td>
                {/if}
                <td>{@html arg.description}</td>
            </tr>
        {/each}
    </tbody>
</table>

<h4>How to use</h4>

<svelte:component this={Y[name]} />

<p>Preview</p>

<svelte:component this={X[name]} {...defaultValueForDoc}/>