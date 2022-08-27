import { describe, it } from "@jest/globals";
import { first } from "./lib/samples_values";
import { get_result } from "./lib/link_synonymous";

describe("link synonyms", () => {
  it("should return a list of words linked between themselves for the first case", () => {
    get_result(first.dictionary);
  });
});
