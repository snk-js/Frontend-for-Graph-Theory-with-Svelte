export type WordPair = string[];

export type MapWordIndexes = Record<string, number>;

export type RecursiveGroupSimilarsReturn =
  | RecursiveGroupSimilars
  | StringAdjacencyList;

export type FlatDict = string[];

export type RecursiveGroupSimilarsParams = [
  list_words: string[],
  memo?: StringAdjacencyList,
  group?: WordPair[],
  i?: number
];

export type RecursiveGroupSimilars = (
  ...args: RecursiveGroupSimilarsParams
) => StringAdjacencyList | RecursiveGroupSimilarsParams;

export type ICase = {
  dictionary: WordPair[];
  queries: WordPair[];
};

export interface ISample extends ICase {
  N: number;
  Q: number;
}

export type ITestSample = {
  T: number;
  testCases: ISample[];
};
