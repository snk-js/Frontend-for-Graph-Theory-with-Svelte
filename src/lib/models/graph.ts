import type { Node } from "./node";

export class Graph {
  nodes: Node[] = [];

  addNode(node: Node) {
    this.nodes.push(node);
    return this;
  }

  getNodes() {
    return this.nodes;
  }
}
