import { Graph } from "../src/code/23.Graph.js";
import {
  breadthFirstSearch,
  BFS,
} from "../src/code/24.breadth-first-search.js";
import { expect } from "chai";

describe("广度优先遍历测试", () => {
  it("广度优先遍历", () => {
    const res = [];
    const printVertex = (value) => {
      // console.log("Visited vertex: " + value);
      res.push(value);
    };

    const graph = new Graph();
    const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    for (let i = 0; i < myVertices.length; i++) {
      graph.addVertex(myVertices[i]);
    }
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("A", "D");
    graph.addEdge("C", "D");
    graph.addEdge("C", "G");
    graph.addEdge("D", "G");
    graph.addEdge("D", "H");
    graph.addEdge("B", "E");
    graph.addEdge("B", "F");
    graph.addEdge("E", "I");

    breadthFirstSearch(graph, myVertices[0], printVertex);

    expect(res.join(",")).to.equal(myVertices.join(","));

    const shortestPathA = BFS(graph, myVertices[0]);
    const expectDistances = {
      A: 0,
      B: 1,
      C: 1,
      D: 1,
      E: 2,
      F: 2,
      G: 2,
      H: 2,
      I: 3,
    };
    const expectPredecessors = {
      A: null,
      B: "A",
      C: "A",
      D: "A",
      E: "B",
      F: "B",
      G: "C",
      H: "D",
      I: "E",
    };

    const { distances, predecessors } = shortestPathA;
    
    expect(JSON.stringify(distances)).to.equal(JSON.stringify(expectDistances))
    expect(JSON.stringify(predecessors)).to.equal(JSON.stringify(expectPredecessors))
  });
});
