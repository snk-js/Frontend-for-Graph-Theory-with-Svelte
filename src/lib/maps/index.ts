export type WadjList = { [key: string]: string[] };
export type MapNodeIndexById = { [key: string]: number };
export type MapNodeIdByIndex = { [key: number]: string };

export const index_to_id_hashmap = (
  word_adjency_list: WadjList
): MapNodeIndexById =>
  Object.keys(word_adjency_list).reduce((nodes, node, i) => {
    Object.defineProperty(nodes, node, { value: i, enumerable: true });
    return nodes;
  }, {});

export const id_to_index_hashmap = (
  word_adjency_list: WadjList
): MapNodeIdByIndex =>
  Object.keys(word_adjency_list).reduce((nodes, node, i) => {
    Object.defineProperty(nodes, i, { value: node, enumerable: true });
    return nodes;
  }, {});
