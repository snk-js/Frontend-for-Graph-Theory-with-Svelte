export class Node {
  id: string;
  index: number;
  visited = false;
  neighbors: number[] = [];

  constructor(id: string, index: number) {
    this.id = id || "";
    this.index = index;
  }

  addNeighbors(neighbors: number[]) {
    this.neighbors = neighbors;
    return this;
  }

  setVisited(visited: boolean) {
    this.visited = visited;
    return this;
  }
}
