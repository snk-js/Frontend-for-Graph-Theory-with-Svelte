import { create } from "domain";
import { group_indexes_by_synonym, flat_dict } from "./synonyms_indexes";
import { WordPair, MapWordToSimilarsIndex } from "./types";

export const search_synonym = (dict: WordPair[], queries: WordPair[]) => {
  const connected_synonyms: MapWordToSimilarsIndex =
    group_indexes_by_synonym(dict);

  const create_tree = (connected_synonyms: MapWordToSimilarsIndex) => {};

  create_tree(connected_synonyms);
};

// class Node {
//   constructor(name: string) {
//     this.name = name;
//     this.children = [];
//   }

//   addChild(name) {
//     this.children.push(new Node(name));
//     return this;
//   }

//   depthFirstSearch(array= []) {
//     const nodes = [this]

//     while(nodes.length) {
//       const currentNode = nodes.shift()
//       array.push(currentNode.name)
//       nodes.unshift(...currentNode.children)
//     }

//     return array
//   }
// }
