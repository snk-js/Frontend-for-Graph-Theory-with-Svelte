import { WordPair } from "./types";
import { MapWordToSimilarsIndex } from "./types";

export const flat_dict = (dict: WordPair[]): string[] => dict.flat();

export const connect_synonyms = (dict: WordPair[]) =>
  group_similars(flat_dict(dict));

const group_similars = (
  list_words: string[],
  memo: MapWordToSimilarsIndex = {},
  groups = [],
  i = 0
): MapWordToSimilarsIndex => {
  if (list_words.length === 0) return memo;
  const word: string | undefined = list_words.shift()?.toLocaleLowerCase();
  word && ((memo[word] && memo[word].push(i)) || (memo[word] = [i]));
  return group_similars(list_words, memo, groups, (i += 1));
};
