<script>
  import { spring } from "svelte/motion";
  import Edge from "./Edge.svelte";
  import { node_selection, nodes_position, mapped_nodes } from "$lib/store";
  export let id;
  export let onMouseDown;
  export let neighbors;

  const indexed_ids = Object.keys(mapped_nodes);

  let nodes_coords = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.02,
      damping: 0.2,
    }
  );

  $: nodes_coords.set($nodes_position[id]);
</script>

{#each neighbors as edge, i}
  <Edge
    edge={indexed_ids[edge]}
    {i}
    x1={$nodes_coords.x}
    y1={$nodes_coords.y}
  />
{/each}

<circle
  on:mousedown={(e) => onMouseDown(e, id)}
  cx={$nodes_coords.x}
  cy={$nodes_coords.y}
  r={$node_selection === id ? 30 : 10}
/>

<style>
  circle {
    fill: #ff3e00;
    z-index: 10;
  }
</style>
