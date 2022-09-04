<script>
  import { spring } from "svelte/motion";
  import { node_selection } from "$lib/store";

  export let id;
  export let onMouseDown;
  export let index;
  export let position;
  export let neighbors;

  let coords = spring(
    { x: position.x, y: position.y },
    {
      stiffness: 0.02,
      damping: 0.2,
    }
  );
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
