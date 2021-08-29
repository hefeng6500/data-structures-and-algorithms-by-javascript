import { RedBlackTree } from "../src/code/21.RedBlackTree.js";

describe("test", () => {
  it("first test", () => {
    // 测试 红黑树旋转
    const tree = new RedBlackTree();

    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(10);
    tree.insert(40);
    tree.insert(35);
    tree.insert(48);
    tree.insert(46);

    console.log(tree);
  });
});
