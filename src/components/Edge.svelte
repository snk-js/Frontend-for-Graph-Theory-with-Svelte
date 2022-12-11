<script>
  import { spring } from "svelte/motion";
  import { nodes_position } from "$lib/store";

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

<!-- TODO: Refact this ugly thing, use trigonometry sorcery to eliminate ternary operators -->
<div
  style="left: {x1 + 15}px;
    top: {y1 + 15}px;
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
    background: transparent;
    opacity: 0.7;
  }

  .edge::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      greenyellow 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    );
  }
</style>
