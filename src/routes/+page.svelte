<script>
    import Node  from '../components/Node.svelte'
    import Draggable from '../components/Draggable.svelte';
    import { build_graph } from '$lib/graph'
    import { first } from '$lib/samples_values'

    const G = build_graph(first.dictionary)
</script>
    
<div class='container'>
    {#each G.getNodes() as { id, index, neighbors, visited, setVisited }, i}
    <Draggable>
		<Node />
    </Draggable>
	{/each}
</div>



<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: gainsboro;
    }

</style>