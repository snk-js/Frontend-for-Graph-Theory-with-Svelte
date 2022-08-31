import { Graph } from "./models/graph";
import { Node } from "./models/node";
import { build_connected_graph_structure } from "$lib/nodes";
import { first } from "$lib/samples_values";

const G = new Graph();
const structure = build_connected_graph_structure(first.dictionary);

const mappedNodes: Record<string, number> = Object.keys(structure).reduce(
  (nodes, node, i) => {
    Object.defineProperty(nodes, node, { value: i, enumerable: true });
    return nodes;
  },
  {}
);

Object.entries(mappedNodes).map(([name, index]) => {
  G.addNode(
    new Node(name, index).addNeighbors(
      structure[name].map((edge) => mappedNodes[edge])
    )
  );
});

export default G;
