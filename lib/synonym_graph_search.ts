import { connect_synonyms, flat_dict } from "./link_synonymous";
import { WordPair, MapWordToSimilarsIndex } from "./types";

export const search_pair = (dict: WordPair[], queries: WordPair[]) => {
  const connected_synonyms: MapWordToSimilarsIndex = connect_synonyms(dict);

  const dict_flat = flat_dict(dict);

  queries.map((query: WordPair) => {
    let result = false;
    const [left, right]: string[] = query.map((a) => a.toLocaleLowerCase());

    console.log(connected_synonyms);
  });
};
