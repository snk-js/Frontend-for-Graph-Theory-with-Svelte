// You're given a list of edges representing an unweighted and undirected graph.
// Write a function that returns a boolean representing whether the given graph is two-edge-connected.

// A graph is connected if, for every pair of vertices in the Graph, there's a path of one or more
// edges connecting the given vertices. A graph that isn't connected is said to be disconnected.

// A graph is two-edge-connected if, for every one of its edges, the edge's removal from the graph doesn'that
// cause the graph to become disconnected. If the removal of any single edge disconnects the Graph,
// then it isn't two-edge-connected.

// If the given graph is lready disconnected, then it also isn't two-edge-connected.

// An empty graph is considered two-edge-connected.

export type Visited = { [vertex: number]: boolean };

// time complexity: O(V+E)
// space complexity: O(V)

export const strongly_connected_graph = (edges: number[][]): boolean => {
  if (edges.length < 2) return true;

  let is_connected = true;
  let vertice_visited = 0;

  const arrival_times = edges.map((_, i) => (i > 0 ? Infinity : 0));
  const visited: Visited = {};

  const depth_first_search = (vertex: number, ancestor: number): number => {
    if (!is_connected) return -1;
    if (vertex in visited) return arrival_times[vertex];

    visited[vertex] = true;
    arrival_times[vertex] = arrival_times[ancestor] + 1;
    vertice_visited++;

    let smallest_arrival_time = Infinity;

    for (const neighbor of edges[vertex]) {
      if (neighbor === ancestor) continue;
      smallest_arrival_time = Math.min(
        smallest_arrival_time,
        depth_first_search(neighbor, vertex)
      );
    }

    const back_track = smallest_arrival_time <= arrival_times[ancestor];
    if (!back_track) is_connected = false;

    return smallest_arrival_time;
  };

  depth_first_search(0, 0);
  return is_connected && vertice_visited === edges.length;
};
