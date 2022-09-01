export class Node {
  id: string;
  index: number;
  position = {
    x: (Math.random() * 1000) % 500,
    y: (Math.random() * 1000) % 500,
  };
  visited = false;
  neighbors: number[] = [];

  constructor(id: string, index: number, position: { x: number; y: number }) {
    this.id = id || "";
    this.index = index;
    this.position = position;
  }

  setPosition(position: { x: number; y: number }) {
    this.position = position;
    return this;
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
