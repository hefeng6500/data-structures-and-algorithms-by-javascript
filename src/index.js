import { LinkList, Node } from "@/code/1.LinkList";
import { DoublyLinkedList, DoublyNode } from "@/code/2.DoublyLinkedList";
import { CircularLinkedList } from "@/code/3.CircularLinkedList";
import { SortedLinkedList } from "@/code/4.SortedLinkedList";
import { StackLinkedList } from "@/code/5.StackLinkedList";
import { Stack } from "./code/6.array-stack";
import { ObjectStack } from "./code/7.object-stack";
import { SymbolStack } from "./code/8.privite-symbol-property-Stack";
import { WeakMapStack } from "./code/9.privite-weakmap-property-Stack";
import { DoublyCircularLinkedList } from "./code/10.DoublyCircularLinkList";
import { defaultCompare, defaultEquals, Compare } from "./utils/index";
import { Set } from "./code/13.Set";
import { HashTable } from "./code/15.HashTable";
import { HashTableLinearProbing } from "./code/17.HashTableLinearProbing";
import { BinarySearchTree } from "./code/19.BinarySearchTree";
import {AVLTree} from "./code/20.AVLTree"

// 测试 avl 右侧的单旋转
const tree = new AVLTree();
window.tree = tree
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(10);
tree.insert(40);
// 节点 5 的插入会导致树的失衡，导致触发树旋转，所以这行代码可以用来 debugger 调试左-左：右旋转的逻辑
// tree.insert(5); 
console.log(tree);

export {
  LinkList,
  Node,
  DoublyLinkedList,
  DoublyNode,
  CircularLinkedList,
  SortedLinkedList,
  StackLinkedList,
  ObjectStack,
  SymbolStack,
  Stack,
  WeakMapStack,
  DoublyCircularLinkedList,
  defaultCompare,
  defaultEquals,
  Compare,
};
