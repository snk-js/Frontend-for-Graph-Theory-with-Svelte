import type { WordPair } from "./types";
import type { MapWordToSimilarsIndex } from "./types";

export const flat_dict = (dict: WordPair[]): string[] =>
  dict.flat().map((a) => a.toLocaleLowerCase());

export const build_connected_graph_structure = (dict: WordPair[]) =>
  link_nodes(flat_dict(dict));

const link_nodes = (
  list_words: string[],
  memo: MapWordToSimilarsIndex = {},
  groups = [],
  i = 0
): MapWordToSimilarsIndex => {
  if (list_words.length === i) return memo;
  const adjacent_word = list_words[i + (i % 2 === 1 ? -1 : 1)];
  const word: string | undefined = list_words[i].toLocaleLowerCase();
  word &&
    ((memo[word] && memo[word].push(adjacent_word)) ||
      (memo[word] = [adjacent_word]));
  return link_nodes(list_words, memo, groups, (i += 1));
};
