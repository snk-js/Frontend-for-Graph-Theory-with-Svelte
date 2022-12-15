<script>
  import { spring } from "svelte/motion";
  import Edge from "./Edge.svelte";
  import Detail from "./Detail.svelte";
  import { nodes_position, mapped_nodes } from "$lib/store";

  export let id;
  export let handleMoveNode;
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

<div
  class="point"
  style="transform: translate({$nodes_coords.x}px,{$nodes_coords.y}px)"
  on:mousedown={(e) => handleMoveNode(e, id)}
>
  <Detail
    content={{ id, neighbors, x1: $nodes_coords.x, y1: $nodes_coords.y }}
  />
</div>

<style>
  .point {
    z-index: 750;
    background-color: pink;
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 9px;
    left: 9px;
    border: 2px solid rgb(255, 51, 88);
    border-radius: 50%;
    background-color: rgb(41, 37, 39);
    box-shadow: 0px 0px 50px 5px rgb(255, 254, 215);
  }
</style>
