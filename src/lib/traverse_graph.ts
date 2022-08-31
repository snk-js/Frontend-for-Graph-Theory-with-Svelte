import {
  build_word_adjency_list,
  flat_dict,
} from "./adjency_list_from_edge_set";
import type { WordPair, WordAdjencyList } from "./types";

export const search_synonym = (dict: WordPair[], queries: WordPair[]) => {
  const vertices: WordAdjencyList = build_word_adjency_list(dict);

  return vertices;
  // const traverse_graph = (vertices: WordAdjencyList, words: string[]) =>
  //   depth_first_search(vertices, words);

  // const ok = traverse_graph(vertices, ["ability", "manager"]);
  // console.log(ok);
  // // console.log(ok);
  // // const result = queries.map((query) => {
  // //   console.log({ vertices });

  // //   return traverse_graph(
  // //     vertices,
  // //     query.map((a) => a.toLocaleLowerCase())
  // //   );
  // // });

  // // console.log(result);
};

// const depth_first_search: any = () => {
//   // verify neighbors
// };

// const depth_first_search: any = (
//   vertices: WordAdjencyList,
//   path: string[],
//   // where I am
//   actual?: string,
//   // where I was
//   last?: string,
//   // where I will go in case of facing no more roads
//   go_back: Array<string | undefined> = [],
//   // index
//   i: number = 0
// ) => {
//   console.log(i, { go_back }, "\n", { actual }, "\n", { last }, "\n", {
//     vertices,
//   });
//   const [start, target] = path;
//   if (target === actual) return "synonym";
//   if (i === 0) actual = start;
//   if (!actual) {
//     return depth_first_search(
//       vertices,
//       path,
//       go_back.shift(),
//       last,
//       go_back,
//       i + 1
//     );
//   }
//   const edges = vertices[actual];
//   if (last === edges[0] && edges.shift()) {
//     return depth_first_search(
//       vertices,
//       path,
//       edges.shift(),
//       actual,
//       go_back,
//       i + 1
//     );
//   }

//   // -----------------------------------------
//   const next = edges.shift();

//   if (edges.length > 0 && edges[0]) {
//     go_back.push(edges.shift());
//   }

//   return depth_first_search(vertices, path, next, actual, go_back, i + 1);
// };

// const depth_first_search: any = (
//   vertices: WordAdjencyList,
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
