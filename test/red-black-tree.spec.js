import { RedBlackTree } from "../src/code/21.RedBlackTree.js";
import { Colors } from "../src/utils/index.js";
import { expect } from "chai";
import "mocha";

describe("红黑树单元测试", () => {
  const tree = new RedBlackTree();
  tree.insert(50);
  tree.insert(30);
  tree.insert(70);
  tree.insert(10);
  tree.insert(40);
  tree.insert(35);
  tree.insert(48);
  tree.insert(46);

  it("1.测试节点颜色非红即黑", () => {
    tree.inOrderTraverse((node) => {
      const { RED, BLACK } = Colors;
      expect([RED, BLACK]).to.include(node.color);
    });
  });

  it("2.测试根节点颜色是黑色", () => {
    expect(tree.root.isRed()).to.equal(false);
  });
});
