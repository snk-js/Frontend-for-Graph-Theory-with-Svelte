import type { StringAdjacencyList } from "../adjacency_list/types";

// base case
export const dfs = (graph: StringAdjacencyList, source) => {
  const arr = [source];

  while (arr.length > 0) {
    const current = arr.pop();
    for (const neighbor of graph[current]) {
      dfs(graph, neighbor);
    }
  }
};
