import { WordPair } from "./types";

type MapWordToSimilarsIndex = Record<string, number | string>;

export const get_result = (dict: WordPair[]) => {
  const linear_dict = dict.flat();
  return group_similars(linear_dict);
};

type RecursiveGroupSimilarsParams = [
  list_words: string[],
  memo?: MapWordToSimilarsIndex,
  group?: WordPair[],
  i?: number
];

type RecursiveGroupSimilars = (
  ...args: RecursiveGroupSimilarsParams
) => RecursiveGroupSimilars | MapWordToSimilarsIndex;

const group_similars: RecursiveGroupSimilars = (
  list_words: string[],
  memo: MapWordToSimilarsIndex = {},
  groups = [],
  i = 0
) => {
  if (list_words.length === 0) return memo;
  const word = list_words.shift()?.toLocaleLowerCase();
  word && ((memo[word] && (memo[word] += `,${i}`)) || (memo[word] = `${i}`));
  return group_similars(list_words, memo, groups, (i += 1));
};
