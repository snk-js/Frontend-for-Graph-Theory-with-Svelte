<script>
    import Node  from '../components/Node.svelte'

    import { node_selection, N } from '$lib/store'

    import { nodes } from '$lib/store'

    function moveNode(e) {
        node_selection && N.update((nodes) => ({...nodes, [$node_selection]: { x: e.clientX, y: e.clientY }}))
    }
            
	function nodeSelection(e, id) {
        console.log(id, $node_selection)
        if($node_selection === id) node_selection.set('')
        else node_selection.set(id)
	}


</script>
    
<div class='container' on:mousedown="{(e) => moveNode(e)}">
        <svg>
            {#each nodes as { id, index, neighbors, visited, setVisited }, i}
                <Node  id={id} onMouseDown={nodeSelection}/>
            {/each}
        </svg>
        
</div>


<style>
    .container {
        width: 100vw;
        height: 100vh;
        max-height: 100vh;
        background: gainsboro;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    svg {
        width: 100%;
        height: 100%;
    }
</style>

<!-- <svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} /> -->