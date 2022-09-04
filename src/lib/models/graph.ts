import type { Node } from "./node";
import { writable } from "svelte/store";

export class Graph {
  nodes = writable<Node[]>([]);

  updateNode(index: number, position: {x:number, y:number}) {
    console.log(this.nodes[index])
    this.nodes.update((previous) => previous.map( (node) => {
      if(node.index === index) {
        return  previous[index].setPosition(position)
      }
      return node
    }))
    console.log(this.nodes[index])
    return this
  }

  addNode(node: Node) {
    this.nodes.update((n) => [...n, node]);
    return this;
  }

  getNodes() {
    return this.nodes;
  }
}
