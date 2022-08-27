import { describe, it } from "@jest/globals";
import { first } from "./lib/samples_values";
import { connect_synonyms } from "./lib/link_synonymous";

describe("link synonyms", () => {
  it("should return a dictionary where values are the index from flat dictionary", () => {
    const test = connect_synonyms(first.dictionary);

    const first_sample_case_result = {
      magic: [0, 23],
      watch: [1, 13],
      underdog: [2, 22],
      earth: [3, 4, 17],
      cake: [5, 19],
      uniform: [6, 10, 11, 21],
      balance: [7, 8, 18],
      ability: [9, 20],
      manager: [12, 14, 15],
      fake: [16],
    };

    expect(test).toStrictEqual(first_sample_case_result);
  });
});
