import { Graph } from "./models/graph";
import { Node } from "./models/node";
import {
  build_word_adjency_list,
  map_named_nodes_to_index,
} from "$lib/adjency_list_from_edge_set";

export const build_graph = (edge_set: string[][]) => {
  const G = new Graph();
  const word_adjency_list = build_word_adjency_list(edge_set);
  const mapped_nodes = map_named_nodes_to_index(word_adjency_list);
  Object.entries(mapped_nodes).map(([name, index]) => {
    G.addNode(
      new Node(name, index).addNeighbors(
        word_adjency_list[name].map((edge) => mapped_nodes[edge])
      )
    );
  });
  return G;
};
