import { describe, it } from "@jest/globals";
import JSONSample from "./example_big.in.json";

import { linkSynonyms, compareSynonyms } from "./synonymous_algorithm";

describe("link synonyms", () => {
  it("should return a list of words linked between themselves", () => {
    console.log(JSONSample.testCases);
  });
});
