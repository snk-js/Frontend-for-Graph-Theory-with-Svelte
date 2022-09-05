<script>
  import { spring } from "svelte/motion";
  import { node_selection, nodes_position } from "$lib/store";
  import { tick } from "svelte";

  export let id;
  export let onMouseDown;
  export let index;
  export let neighbors;

  let coords = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.02,
      damping: 0.2,
    }
  );

  nodes_position.subscribe(async (newNodesPosition) => {
    coords.set($nodes_position[id]);
  });
</script>

<circle
  on:mousedown={(e) => onMouseDown(e, id)}
  cx={$coords.x}
  cy={$coords.y}
  r={$node_selection === id ? 30 : 10}
/>

<style>
  circle {
    fill: #ff3e00;
  }
</style>
