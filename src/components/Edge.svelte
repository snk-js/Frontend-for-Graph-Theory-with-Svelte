<script>
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";
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

<line {x1} {y1} x2={$edges_coords.x} y2={$edges_coords.y} stroke="black" />
