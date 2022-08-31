<script>
    import G from '$lib/graph'
    import Node  from '../components/Node.svelte'

    console.log(G)
</script>
    
<div class='container'>
    {#each G.getNodes() as { id, index, neighbors, visited, setVisited }, i}

		<Node />

	{/each}
</div>



<style>


</style>