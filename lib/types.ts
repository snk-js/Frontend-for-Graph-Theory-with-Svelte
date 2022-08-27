export type WordPair = string[];

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
