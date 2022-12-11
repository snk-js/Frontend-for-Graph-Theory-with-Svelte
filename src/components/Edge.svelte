<script>
  import { spring } from "svelte/motion";
  import { nodes_position } from "$lib/store";
  import { onMount } from "svelte";

  export let edge;
  export let i;
  export let x1;
  export let y1;

  let edges_coords = spring(
    {
      x: 0,
      y: 0,
    },
    {
      stiffness: 0.02,
      damping: 0.2,
    }
  );

  $: edges_coords.set($nodes_position[edge]);
</script>

<div
  style="left: {x1}px;
    top: {y1}px;
    transform-origin: top left;
    transform: {x1 - $edges_coords.x > 0 && y1 - $edges_coords.y > 0
    ? 'rotate(180deg)'
    : x1 - $edges_coords.x > 0
    ? 'rotateY(180deg)'
    : y1 - $edges_coords.y > 0
    ? 'rotateX(180deg)'
    : 'none'};
    width: {Math.abs(x1 - $edges_coords.x)}px;
    height: {Math.abs(y1 - $edges_coords.y)}px;
    left: 0;
    top: 0;"
  class="edge"
/>

<!-- <line {x1} {y1} x2={$edges_coords.x} y2={$edges_coords.y} stroke="black" /> -->
<style>
  .edge {
    z-index: 500;
    position: absolute;
    background: pink;
    opacity: 0.7;
    border: 2px solid red;
  }
</style>
