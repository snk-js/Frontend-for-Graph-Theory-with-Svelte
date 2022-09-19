import type { StringAdjacencyList } from "../adjacency_list/types";

export const bfs = (graph: StringAdjacencyList, source) => {
  const arr = [source];

  while (arr.length > 0) {
    const current = arr.shift();
    for (const neighbor of graph[current]) {
      bfs(graph, neighbor);
    }
  }
};
