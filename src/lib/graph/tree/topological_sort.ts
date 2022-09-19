export function topological_sort(nodes, deps) {
  const finished = new Set();
  const in_progress = new Set();
  const dep_map = new Map();
  const output = [];

  const c = (n) => {
    if (finished.has(n)) return true;
    if (in_progress.has(n)) return false;

    in_progress.add(n);

    if (dep_map.has(n)) {
      for (const dep of dep_map.get(n)) {
        if (!finished.has(dep)) {
          if (!c(dep)) return false;
        }
      }
    }

    output.push(n);
    finished.add(n);
    in_progress.delete(n);
    return true;
  };

  for (const dep of deps) {
    if (dep_map.has(dep[1])) {
      dep_map.set(dep[1], [...dep_map.get(dep[1]), dep[0]]);
    } else {
      dep_map.set(dep[1], [dep[0]]);
    }
  }

  for (const n of nodes) {
    if (finished.has(n)) {
      continue;
    }
    if (!c(n)) return [];
  }
  return output;
}
