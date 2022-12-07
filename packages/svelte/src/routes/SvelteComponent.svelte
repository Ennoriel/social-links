<script lang="ts">
    import * as X from '$lib';
    
    export let name: string;
    export let args: Array<{
        key: string,
        type: string,
        optional?: boolean,
        prefix?: string
    }>;

    console.log(X)
</script>

<h3>{name}</h3>

<p>Props:</p>

<table>
    <thead>
        <th>Name</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Prefix</th>
    </thead>
    <tbody>
        {#each args as arg}
            <tr>
                <td>{arg.key}</td>
                <td><code>{arg.type}</code></td>
                <td>{arg.optional ? "Yes" : ""}</td>
                <td>{arg.prefix ?? ""}</td>
            </tr>
        {/each}
    </tbody>
</table>

<p>Example</p>

<pre>{"<"}{name}{"/>"}</pre>

<p>Preview</p>

<svelte:component this={X[name]}/>