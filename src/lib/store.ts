import { writable, readable } from "svelte/store";
import { build_graph } from "$lib/graph";
import { first } from "$lib/samples_values";

const G = build_graph(first.dictionary);

export const nodes = G.getNodes();

export const graph = readable(nodes);

const build_nodes_state = (vertices) =>
  vertices.reduce((nodesObj, node) => {
    nodesObj[node.id] = {
      x: Math.floor(Math.random() * 1000) % 400,
      y: Math.floor(Math.random() * 1000) % 400,
    };
    return nodesObj;
  }, {});

const nodes_state = build_nodes_state(nodes);

export const N = writable(nodes_state);

export const node_selection = writable("");
