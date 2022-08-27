export type WordPair = string[];

export type MapWordToSimilarsIndex = Record<string, [number?]>;

export type RecursiveGroupSimilarsReturn =
  | RecursiveGroupSimilars
  | MapWordToSimilarsIndex;

export type FlatDict = string[];

export type RecursiveGroupSimilarsParams = [
  list_words: string[],
  memo?: MapWordToSimilarsIndex,
  group?: WordPair[],
  i?: number
];

export type RecursiveGroupSimilars = (
  ...args: RecursiveGroupSimilarsParams
) => MapWordToSimilarsIndex | RecursiveGroupSimilarsParams;

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
