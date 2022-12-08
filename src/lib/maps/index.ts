export type WadjList = { [key: string]: string[] };
export type MapNodeIndexById = { [key: string]: number };
export type MapNodeIdByIndex = { [key: number]: string };

export const node_index_by_id_MAP = (
  word_adjency_list: WadjList
): MapNodeIndexById =>
  Object.keys(word_adjency_list).reduce((nodes, node, i) => {
    Object.defineProperty(nodes, node, { value: i, enumerable: true });
    return nodes;
  }, {});

export const node_id_by_index_MAP = (
  word_adjency_list: WadjList
): MapNodeIdByIndex =>
  Object.keys(word_adjency_list).reduce((nodes, node, i) => {
    Object.defineProperty(nodes, i, { value: node, enumerable: true });
    return nodes;
  }, {});
