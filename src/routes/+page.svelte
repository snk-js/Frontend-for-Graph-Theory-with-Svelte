<script>
  import NodeDraw from "../components/Node.svelte";
  import { onMount } from "svelte";
  import { Node } from "$lib/models/node";
  import { node_selection, G } from "$lib/store";
  import {
    build_word_adjency_list,
    map_named_nodes_to_index,
  } from "$lib/adjency_list_from_edge_set";
  import { first } from "$lib/samples_values";

  $: innerHeight = 0;
  $: innerWidth = 0;

  let nodes;

  const edge_set = first.dictionary;

  const word_adjency_list = build_word_adjency_list(edge_set);
  const mapped_nodes = map_named_nodes_to_index(word_adjency_list);

  const unsubscribe = G.getNodes().subscribe((newNodes) => {
    nodes = newNodes;
  });

  onMount(async () => {
    Object.entries(mapped_nodes).map(([name, index], i) => {
      setTimeout(() => {
        G.addNode(
          new Node(name, index)
            .addNeighbors(
              word_adjency_list[name].map((edge) => mapped_nodes[edge])
            )
            .setPosition({
              x:
                innerWidth / 2 +
                (((0.5 - Math.random()) * 1000) % (0.4 * innerWidth)),
              y:
                innerHeight / 2 +
                (((0.5 - Math.random()) * 1000) % (0.4 * innerHeight)),
            })
        );
      }, i * 300);
    });
  });

  function moveNode(e) {
    console.log(node_selection, mapped_nodes[$node_selection]);
    node_selection &&
      G.updateNode(mapped_nodes[$node_selection], {
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
    {#each nodes as node, i}
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
