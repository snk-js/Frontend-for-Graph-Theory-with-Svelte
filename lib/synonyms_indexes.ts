import { WordPair } from "./types";
import { MapWordToSimilarsIndex } from "./types";

export const flat_dict = (dict: WordPair[]): string[] =>
  dict.flat().map((a) => a.toLocaleLowerCase());

export const group_indexes_by_synonym = (dict: WordPair[]) =>
  similar_indexes(flat_dict(dict));

const similar_indexes = (
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
  return similar_indexes(list_words, memo, groups, (i += 1));
};
