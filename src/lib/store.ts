import { writable, readable, derived } from "svelte/store";
import { build_graph } from "$lib/graph";
import { first } from "$lib/samples_values";

export const G = build_graph(first.dictionary);

export const nodes = G.getNodes();

const build_nodes_state = (vertices) =>
  vertices.reduce((nodesObj, node) => {
    nodesObj[node.id] = node.position;
    return nodesObj;
  }, {});

const nodes_state = build_nodes_state(nodes);

export const N = writable(nodes_state);

export function new_nodes(nodes) {
  N.set(build_nodes_state(nodes));
}

export const node_selection = writable("");
