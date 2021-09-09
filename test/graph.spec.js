import { Graph } from "../src/code/23.Graph.js";
import { expect } from "chai";

describe("图", () => {
  it("图测试", () => {
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

    let adjList = graph.getAdjList();

    const expextResult = {
      A: "B,C,D",
      B: "A,E,F",
      C: "A,D,G",
      D: "A,C,G,H",
      E: "B,I",
      F: "B",
      G: "C,D",
      H: "D",
      I: "E",
    };
    for (let key in expextResult) {
      expect(adjList.get(key).join(",")).to.equal(expextResult[key]);
    }

    // A -> B C D
    // B -> A E F
    // C -> A D G
    // D -> A C G H
    // E -> B I
    // F -> B
    // G -> C D
    // H -> D
    // I -> E
  });
});
