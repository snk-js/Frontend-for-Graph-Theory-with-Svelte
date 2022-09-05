<script>
  import NodeDraw from "../components/Node.svelte";
  import { onMount } from "svelte";
  import { node_selection, nodes_stats, updateNodePosition } from "$lib/store";

  $: innerHeight = 0;
  $: innerWidth = 0;

  onMount(() => {
    Object.values($nodes_stats).map((node, i) => {
      setTimeout(() => {
        updateNodePosition(node.id, {
          x:
            innerWidth / 2 +
            (((0.5 - Math.random()) * 1000) % (0.4 * innerWidth)),
          y:
            innerHeight / 2 +
            (((0.5 - Math.random()) * 1000) % (0.4 * innerHeight)),
        });
      }, 100 * i);
    });
  });

  function moveNode(e) {
    node_selection &&
      updateNodePosition($node_selection, {
        x: e.clientX,
        y: e.clientY,
      });
  }

  function nodeSelection(e, id) {
    if ($node_selection === id) node_selection.set("");
    else node_selection.set(id);
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="container" on:mousedown={(e) => moveNode(e)}>
  <svg>
    {#each $nodes_stats as node, i}
      <NodeDraw {...node} onMouseDown={nodeSelection} />
    {/each}
  </svg>
</div>

<!-- <svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} /> -->
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
