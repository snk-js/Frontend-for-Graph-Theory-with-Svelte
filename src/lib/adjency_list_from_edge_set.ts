import type { WordPair } from "./types";
import type { WordAdjencyList } from "./types";

export const flat_dict = (dict: WordPair[]): string[] =>
  dict.flat().map((a) => a.toLocaleLowerCase());

export const build_word_adjency_list = (dict: WordPair[]): WordAdjencyList =>
  link_nodes_by_name(flat_dict(dict));

export const adjency_list = (dict: WordPair[]) =>
  link_nodes_by_name(flat_dict(dict));

const link_nodes_by_name = (
  edge_set: string[],
  memo: WordAdjencyList = {},
  groups = [],
  i = 0
): WordAdjencyList => {
  if (edge_set.length === i) return memo;
  const adjacent_word = edge_set[i + (i % 2 === 1 ? -1 : 1)];
  const word: string | undefined = edge_set[i].toLocaleLowerCase();
  word &&
    ((memo[word] && memo[word].push(adjacent_word)) ||
      (memo[word] = [adjacent_word]));
  return link_nodes_by_name(edge_set, memo, groups, (i += 1));
};

export const map_named_nodes_to_index = (
  word_adjency_list: WordAdjencyList
): Record<string, number> =>
  Object.keys(word_adjency_list).reduce((nodes, node, i) => {
    Object.defineProperty(nodes, node, { value: i, enumerable: true });
    return nodes;
  }, {});
