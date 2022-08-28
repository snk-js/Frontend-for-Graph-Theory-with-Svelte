import { verify } from "crypto";
import { create } from "domain";
import { group_indexes_by_synonym, flat_dict } from "./synonyms_indexes";
import { WordPair, MapWordToSimilarsIndex } from "./types";

export const search_synonym = (dict: WordPair[], queries: WordPair[]) => {
  const vertices: MapWordToSimilarsIndex = group_indexes_by_synonym(dict);

  const traverse_graph = (vertices: MapWordToSimilarsIndex, words: string[]) =>
    depth_first_search(vertices, words);

  const ok = traverse_graph(vertices, ["balance", "manager"]);

  console.log(ok);

  // const result = queries.map((query) => {
  //   console.log({ vertices });

  //   return traverse_graph(vertices, query);
  // });

  // console.log(result);
};

const depth_first_search: any = (
  vertices: MapWordToSimilarsIndex,
  words: string[],
  edge?: string,
  last_vertice?: string,
  i: number = 0
) => {
  const [start_position, target] = words;

  if (target === edge) return "synonym";

  console.log(
    i,
    "\n",
    { edge },
    "\n",
    { last_vertice },
    "\n",
    { start_position },
    "\n",
    { target }
  );

  const edges = vertices[edge || start_position];
  const next = edges.shift();

  if (!last_vertice) last_vertice = start_position;

  if (next !== last_vertice && next !== edge) {
    if (edge) last_vertice = edge;
    // last_vertice  === actual vertice (edge) only after the first rotation
    return depth_first_search(vertices, words, next, last_vertice, i + 1);
  }

  if (next === last_vertice) last_vertice = edge;

  const actual = edges.shift();
  return depth_first_search(vertices, words, actual, last_vertice, i + 1);
};
