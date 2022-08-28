import { start } from "repl";
import { build_connected_graph_structure, flat_dict } from "./nodes";
import { WordPair, MapWordToSimilarsIndex } from "./types";

export const search_synonym = (dict: WordPair[], queries: WordPair[]) => {
  const vertices: MapWordToSimilarsIndex =
    build_connected_graph_structure(dict);

  const traverse_graph = (vertices: MapWordToSimilarsIndex, words: string[]) =>
    depth_first_search(vertices, words);

  const ok = traverse_graph(vertices, ["uniform", "manager"]);
  console.log(ok);
  // const result = queries.map((query) => {
  //   console.log({ vertices });

  //   return traverse_graph(
  //     vertices,
  //     query.map((a) => a.toLocaleLowerCase())
  //   );
  // });

  // console.log(result);
};

const depth_first_search: any = (
  vertices: MapWordToSimilarsIndex,
  path: string[],
  // where I am
  actual?: string,
  // where I was
  last?: string,
  // where I will go in case of facing no more roads
  go_back: Array<string | undefined> = [],
  // index
  i: number = 0
) => {
  const [start, target] = path;

  console.log(i, { actual, last }, { go_back });

  if (target === actual) return "synonym";
  if (i === 0) actual = start;

  if (!actual) return "different";
  const edges = vertices[actual];

  if (!edges[0])
    return depth_first_search(
      vertices,
      path,
      go_back.shift(),
      actual,
      go_back,
      i + 1
    );

  // -----------------------------------------
  const next = edges.shift();
  while (edges.length > 0 && edges[0]) go_back.push(edges.shift());

  return depth_first_search(vertices, path, next, actual, go_back, i + 1);
};

// const depth_first_search: any = (
//   vertices: MapWordToSimilarsIndex,
//   words: string[],
//   edge?: string,
//   last_vertice?: string,
//   i: number = 0,
//   go_back?: string
// ) => {
//   const [start_position, target] = words;
//   console.log(
//     i,
//     "---vou para----",
//     vertices[edge || start_position][0],
//     { next: vertices },
//     "\n",
//     "---estou em---",
//     edge,
//     "\n",
//     "---sai de:---",
//     last_vertice,
//     "\n",
//     go_back
//   );
//   if (target === edge) return "synonym";

//   // if (i === 16) return vertices;

//   if (i !== 0 && !edge) return vertices;

//   const edges = vertices[edge || start_position];

//   if (edges[0] === edge || edges[0] === last_vertice) {
//     console.log(edge, last_vertice);
//     edges.shift();
//     return depth_first_search(
//       vertices,
//       words,
//       edge,
//       last_vertice,
//       i + 1,
//       go_back
//     );
//   }

//   const next = edges.shift();

//   edges.length > 0 && (go_back = edges.shift());

//   if (!last_vertice) edge = start_position;
//   // if next === edge -> use last unsolved path

//   if (next !== edge) last_vertice = edge;

//   if (next !== last_vertice) {
//     if (edge) last_vertice = edge;

//     // last_vertice  === actual vertice (edge) only after the first rotation
//     return depth_first_search(vertices, words, next, last_vertice, i + 1);
//   }

//   const actual = edges.shift();
//   return depth_first_search(vertices, words, actual, last_vertice, i + 1);
// };
