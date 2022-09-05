<script>
  import { spring } from "svelte/motion";
  import { onMount } from "svelte/types/runtime/internal/lifecycle";
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

  const connect_edges = () => {
    edges_coords.set({
      x: $nodes_position[edge].x,
      y: $nodes_position[edge].y,
    });
  };

  onMount(() => {
    setTimeout(() => {
      connect_edges();
    }, 300 * i);
  });
</script>

<line {x1} {y1} x2={$edges_coords.x} y2={$edges_coords.y} stroke="black" />
