import { writable } from "svelte/store";
import { string_adjacency_list } from "$lib/graph/adjacency_list";
import { index_to_id_hashmap } from "$lib/maps/index";
import { first } from "$lib/samples_values";

const edge_set = first.dictionary;

const test = [["orbital 1", "orbital 2"]];

const word_adjency_list = string_adjacency_list(edge_set);
export const mapped_nodes: Record<string, number> =
  index_to_id_hashmap(word_adjency_list);

const nodes_stats_state = Object.entries(mapped_nodes).map(([name, index]) => ({
  id: name,
  index,
  neighbors: [...word_adjency_list[name].map((edge) => mapped_nodes[edge])],
}));

const nodes_position_by_id = Object.keys(mapped_nodes).reduce(
  (acc, id) => ({ ...acc, [id]: { x: 0, y: 0 } }),
  {}
);

export const nodes_stats = writable(nodes_stats_state);

export const nodes_position = writable(nodes_position_by_id);

export const updateNodePosition = (id: string, newPosition) => {
  nodes_position.update((nodes_pos) => ({ ...nodes_pos, [id]: newPosition }));
};

export const node_selection = writable("");
