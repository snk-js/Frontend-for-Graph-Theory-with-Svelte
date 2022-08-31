<script>
    import Node  from '../components/Node.svelte'
    import { build_graph } from '$lib/graph'
    import { first } from '$lib/samples_values'

    const G = build_graph(first.dictionary)

    console.log(G, 'lol', 'lol')
</script>
    
<div class='container'>
    {#each G.getNodes() as { id, index, neighbors, visited, setVisited }, i}

		<Node />

	{/each}
</div>



<style>


</style>