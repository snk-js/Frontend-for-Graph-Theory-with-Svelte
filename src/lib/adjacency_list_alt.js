export const adj_list = (nodes_a, nodes_b, memo = []) => {
  if (!nodes_a.length) return memo;

  const a = nodes_a.shift();
  const b = nodes_b.shift();

  !Array.isArray(memo[a]) && (memo[a] = []);
  !Array.isArray(memo[b]) && (memo[b] = []);
  memo[a].push(b);
  memo[b].push(a);

  return adj_list(nodes_a, nodes_b, memo);
};
