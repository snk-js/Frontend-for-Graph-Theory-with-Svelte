import { first } from "../lib/samples_values";
import { describe, it, expect } from "@jest/globals";
import { build_word_adjency_list } from "../lib/adjency_list_from_edge_set";

const first_case = first.dictionary;
const first_query = first.queries;

describe("", () => {
  it("should return a dictionary where values are the index from flat dictionary", () => {
    const dict = [
      ["magic", "WaTCH"],
      ["uNdeRDog", "EartH"],
      ["EArTh", "caKE"],
      ["UnIforM", "baLance"],
      ["BALancE", "ABILity"],
      ["UnifORM", "uNIfORM"],
      ["maNagER", "WaTcH"],
      ["MaNagER", "MaNAGeR"],
      ["FaKe", "EaRth"],
      ["BAlance", "CAKe"],
      ["AbIliTY", "uNiFOrm"],
      ["UNdErdoG", "magiC"],
    ];

    const result = build_word_adjency_list(first_case);

    const first_sample_case_result = {
      magic: ["watch", "underdog"],
      watch: ["magic", "manager"],
      underdog: ["earth", "magic"],
      earth: ["underdog", "cake", "fake"],
      cake: ["earth", "balance"],
      uniform: ["balance", "uniform", "uniform", "ability"],
      balance: ["uniform", "ability", "cake"],
      ability: ["balance", "uniform"],
      manager: ["watch", "manager", "manager"],
      fake: ["earth"],
    };

    expect(result).toStrictEqual(first_sample_case_result);
  });

  // it("it should return something", () => {
  //   console.log(first_query);
  //   console.log(search_synonym(first_case, first_query));
  // });
});
