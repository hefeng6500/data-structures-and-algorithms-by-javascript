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
import { AVLTree } from "./code/20.AVLTree";
import { RedBlackTree } from "./code/21.RedBlackTree";

// 测试 红黑树旋转
const tree = new RedBlackTree();
window.tree = tree;
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(10);
tree.insert(40);
tree.insert(35);
tree.insert(48);
debugger
tree.insert(46);

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
