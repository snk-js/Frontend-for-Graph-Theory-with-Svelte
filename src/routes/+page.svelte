<script>
    import Node  from '../components/Node.svelte'
    import { onMount } from 'svelte'
    import { node_selection, N, new_nodes, G } from '$lib/store'
    import { nodes } from '$lib/store'
    
	$: innerHeight = 0
	$: innerWidth = 0
    
    onMount(async () => {
        const newNodes = G.getNodes().map((node, i) => {
            return node.setPosition({x:innerWidth/2+((0.5-Math.random())*1000%(0.4*innerWidth)), y: innerHeight/2+((0.5-Math.random())*1000%(0.4*innerHeight))})
        })

        new_nodes(newNodes)

        setTimeout(() => {
            console.log('added')
        
        }, 4000)
    });


    function moveNode(e) {
        node_selection && N.update((nodes) => ({...nodes, [$node_selection]: { x: e.clientX, y: e.clientY }}))
    }
            
	function nodeSelection(e, id) {
        if($node_selection === id) node_selection.set('')
        else node_selection.set(id)
	}

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class='container' on:mousedown="{(e) => moveNode(e)}">
        <svg>
            {#each nodes as { id, index, neighbors, visited, setVisited }, i}
                <Node id={id} onMouseDown={nodeSelection} index={index}/>
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
    
    .ok {
        width: 50px;
        height: 50px;
        background: pink
    }
    svg {
        width: 100%;
        height: 100%;
    }
</style>

<!-- <svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} /> -->