export type WordPair = string[];

export type MapWordIndexes = Record<string, number>;

export type WordAdjencyList = Record<string, [string]>;

export type RecursiveGroupSimilarsReturn =
  | RecursiveGroupSimilars
  | WordAdjencyList;

export type FlatDict = string[];

export type RecursiveGroupSimilarsParams = [
  list_words: string[],
  memo?: WordAdjencyList,
  group?: WordPair[],
  i?: number
];

export type RecursiveGroupSimilars = (
  ...args: RecursiveGroupSimilarsParams
) => WordAdjencyList | RecursiveGroupSimilarsParams;

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
