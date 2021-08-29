import { defaultCompare, Compare } from "@/index";
import { BalanceFactor } from "@/utils/index";
import { BinarySearchTree } from "./19.BinarySearchTree";
import { Node } from "./19.BinarySearchTree";

export class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
  }

  // 获取节点高度
  getNodeHeight(node) {
    if (node == null) {
      // 这里空节点（叶子节点）返回 -1，可以根据下面的 return 推导出来
      return -1;
    }

    // 节点的高度是从节点到其任意子节点的边的最大值
    // 父节点的高度都比子节点的高度 +1， 不容置疑，所以要 +1
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  // 获取平衡因子
  getBalanceFactor(node) {
    // 这里算的平衡因子 = 左侧子节点高度 - 右侧子节点高度
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  // 左-左：向右的单旋转。左侧失衡
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  // 右-右(RR)：向左的单旋转。右侧失衡
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  // 左-右(LR)：向右的双旋转
  // 左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重
  rotationLR(node) {
    node.left = this.rotationRR(node.left); // 相当于对 node.left 进行一个左旋转
    return this.rotationLL(node); // 再对 node 进行一个右旋转
  }

  // 右-左(RL)：向左的双旋转
  // 右侧子节点的高度大于左侧子节点的高度，并且右侧子节点左侧较重
  rotationRL(node) {
    node.right = this.rotationLL(node.right); // 相当于对 node.right 进行一个右旋转
    return this.rotationRR(node); // 再对 node 进行一个左旋转
  }

  insert(key) {
    // 每次 insertNode 都是对 this.root 的重新赋值
    this.root = this.insertNode(this.root, key);
  }
  insertNode(node, key) {
    // 像在 BST 树中一样插入节点
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // 重复的键
    }

    // 如果需要，将树进行平衡操作
    const balanceFactor = this.getBalanceFactor(node);
    // 树的左侧失衡（较重）
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      // 与 node.left 对比，若是小于 node.left， 说明 key 在 node.left 的左侧，直接一个右旋转就可以平衡
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        // 否则，key 大于 node.left， 说明 key 在 node.left 的右侧，换句话说是，左侧子节点右侧较重
        // 需要对 node.left 进行一个左旋转， 再对 node 进行一个右旋转
        // 这两个旋转的合成就是 rotationLR
        return this.rotationLR(node);
      }
    }

    // 树的右侧较重
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      // 与 node.right 对比，若是 key 大于 node.right， 说明 key 在 node.right 的右侧，直接一个左旋转就可以平衡
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node);
      } else {
        // 否则，key 小于 node.right，说明 key 在 node.right 的左侧，换句话说是，右侧子节点左侧较重
        // 需要对 node.right 先进行一个右旋转，再对 node 进行一个左旋转
        // 这两个旋转的合成就是 rotationRL
        return this.rotationRL(node);
      }
    }

    // 返回 node 的目的是，操作了节点后对该节点进行返回， 最终返回的是操作后的 root 节点
    // 其实每次 insertNode 都是对 this.root 的重新赋值
    return node;
  }

  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node; // null，不需要进行平衡
    }
    // 检测树是否平衡
    const balanceFactor = this.getBalanceFactor(node);
    // 左侧较重
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      // 左侧的左节点较重
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationLL(node);
      }
      // 左侧的右节点较重
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left);
      }
    }
    // 右侧较重
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      // 右侧的右节点较重
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationRR(node);
      }
      // 右侧的左节点较重
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}
