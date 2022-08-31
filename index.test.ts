import { describe, it } from "@jest/globals";
import { first } from "$lib/samples_values";
import { build_connected_graph_structure } from "./lib/nodes";
import { search_synonym } from "./lib/traverse_graph";

const first_case = first.dictionary;
const first_query = first.queries;

describe("link synonyms", () => {
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

    const test = build_connected_graph_structure(first_case);
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

    expect(test).toStrictEqual(first_sample_case_result);
  });
  it("it should return something", () => {
    console.log(first_query);
    console.log(search_synonym(first_case, first_query));
  });
});
