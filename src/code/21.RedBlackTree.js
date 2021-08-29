import { defaultCompare } from "@/index";
import { Colors, Compare } from "@/utils/index";
import { Node, BinarySearchTree } from "./19.BinarySearchTree";

export class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.color = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}

export class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
  }

  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      // newNode 是当前插入的那个节点
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        // 逻辑和二叉搜索树中的一样,不同之处在于保存了指向被插入节点父节点的引用
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new RedBlackNode(key);
        node.right.parent = node;
        return node.right;
      } else {
        return this.insertNode(node.right, key);
      }
    }
  }

  // 在插入节点后验证红黑树属性
  fixTreeProperties(node) {
    while (
      node &&
      node.parent &&
      node.parent.isRed() &&
      node.color !== Colors.BLACK
    ) {
      let parent = node.parent;
      const grandParent = parent.parent;
      // 情形 A: 父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        if (uncle && uncle.isRed()) {
          grandParent.color = Colors.RED;
          uncle.color = Colors.BLACK;
          parent.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 情形 2A： 节点是右侧子节点（左侧的右子树较重） -- 左旋转
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }
          // 情形 3A：节点是左侧子节点 -- 右旋转
          this.rotationLL(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {
        // 情形 B: 父节点是右侧子节点
        const uncle = grandParent.left;
        if (uncle && uncle.isRed()) {
          grandParent.color = Colors.RED;
          uncle.color = Colors.BLACK;
          parent.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 情形 2B：节点是左侧子节点——左旋转
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          // 情形 3B：节点是右侧子节点——左旋转
          this.rotationRR(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }

      this.root.color = Colors.BLACK;
    }
  }

  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent; 
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }
}
