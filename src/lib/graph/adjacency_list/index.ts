import type { StringAdjacencyList } from "./types";
import { map_node_index_by_id } from "../../maps/";
import type { MapNodeIndexById } from "../../maps";
import { flat_array_of_edges } from "../../case_specific_utils";
// edge0: [x0:number, y0: number]
// edge1: [x1: number, y1: number]
export const adj_list = (
  x: number[],
  y: number[],
  memo: number | undefined[] = []
) => {
  if (!x.length) return memo;

  const x0: number = x.shift() || -1;
  const y0: number = y.shift() || -1;

  !Array.isArray(memo[x0]) && (memo[x0] = []);
  !Array.isArray(memo[y0]) && (memo[y0] = []);
  memo[x0].push(x0);
  memo[y0].push(y0);
  return adj_list(x, y, memo);
};

// edge0 -> edge_set[0]: [string, string]
export const str_adj_list = (
  edge_set: string[],
  memo: StringAdjacencyList = {},
  i = 0
): StringAdjacencyList => {
  if (edge_set.length === i) return memo;
  const adjacent_word = edge_set[i + (i % 2 === 1 ? -1 : 1)];
  const word: string | undefined = edge_set[i].toLocaleLowerCase();
  word &&
    ((memo[word] && memo[word].push(adjacent_word)) ||
      (memo[word] = [adjacent_word]));
  return str_adj_list(edge_set, memo, (i += 1));
};

export const string_adjacency_list = (edges: string[][]): StringAdjacencyList =>
  str_adj_list(flat_array_of_edges(edges));

export const num_adjency_list = (dict: string[][]): number[][] => {
  const word_adj_list = string_adjacency_list(dict);
  const mapped_nodes = map_node_index_by_id(word_adj_list);
  return link_nodes_by_index(mapped_nodes, word_adj_list);
};

const link_nodes_by_index = (
  mapped_nodes: MapNodeIndexById,
  word_adj_list: StringAdjacencyList
): number[][] => {
  return Object.keys(word_adj_list).map((vertice) => {
    return word_adj_list[vertice].map((edge) => mapped_nodes[edge]);
  });
};

export const build_adjacency_list = (edge_set: string[][]): number[][] =>
  num_adjency_list(edge_set);
