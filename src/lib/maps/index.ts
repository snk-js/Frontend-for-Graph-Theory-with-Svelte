export type WadjList = { [key: string]: string[] };
export type MapNodeIndexById = { [key: string]: number };
export type MapNodeIdByIndex = { [key: number]: string };

export const map_node_index_by_id = (
  word_adjency_list: WadjList
): MapNodeIndexById =>
  Object.keys(word_adjency_list).reduce((nodes, node, i) => {
    Object.defineProperty(nodes, node, { value: i, enumerable: true });
    return nodes;
  }, {});

export const map_node_id_by_index = (
  word_adjency_list: WadjList
): MapNodeIdByIndex =>
  Object.keys(word_adjency_list).reduce((nodes, node, i) => {
    Object.defineProperty(nodes, i, { value: node, enumerable: true });
    return nodes;
  }, {});
