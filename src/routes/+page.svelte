<script>
    import G from '$lib/graph'
    import Node  from '../components/Node.svelte'
</script>
    
<div class='container'>
    {#each G.getNodes() as { id, index, neighbors, visited, setVisited }, i}

		<Node />

	{/each}
</div>



<style>


</style>