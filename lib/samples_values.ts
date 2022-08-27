import * as JSONSample from "../example_big/example_big.in.json";

import { ITestSample, WordPair } from "./types";

const sample: ITestSample = JSONSample;

const { testCases } = sample;

export const first = JSONSample.testCases[0];

type WordPairArr = WordPair[];

export const all_cases: WordPairArr[][] = testCases.map((case_sample) => {
  return [case_sample.dictionary, case_sample.queries];
});
