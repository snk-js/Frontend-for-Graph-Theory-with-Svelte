import * as JSONSample from "../__mock__/big_sample.json";

import type { ITestSample, WordPair } from "./types";

const sample: ITestSample = JSONSample;

const { testCases } = sample;

export const first = JSONSample.testCases[0];

type WordPairArr = WordPair[];

export const all_cases: WordPairArr[][] = testCases.map((case_sample) => {
  return [case_sample.dictionary, case_sample.queries];
});
