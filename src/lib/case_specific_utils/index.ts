export const flat_array_of_edges = (dict: string[][]): string[] =>
  dict.flat().map((a) => a.toLocaleLowerCase());
