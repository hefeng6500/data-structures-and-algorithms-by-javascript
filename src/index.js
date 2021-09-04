import { LinkList, Node } from "./code/1.LinkList.js";
import { DoublyLinkedList, DoublyNode } from "./code/2.DoublyLinkedList.js";
import { CircularLinkedList } from "./code/3.CircularLinkedList.js";
import { SortedLinkedList } from "./code/4.SortedLinkedList.js";
import { StackLinkedList } from "./code/5.StackLinkedList.js";
import { Stack } from "./code/6.array-stack.js";
import { ObjectStack } from "./code/7.object-stack.js";
import { SymbolStack } from "./code/8.privite-symbol-property-Stack.js";
import { WeakMapStack } from "./code/9.privite-weakmap-property-Stack.js";
import { DoublyCircularLinkedList } from "./code/10.DoublyCircularLinkList.js";
import { defaultCompare, defaultEquals, Compare } from "./utils/index.js";
import { Set } from "./code/13.Set.js";
import { HashTable } from "./code/15.HashTable.js";
import { HashTableLinearProbing } from "./code/17.HashTableLinearProbing.js";
import { BinarySearchTree } from "./code/19.BinarySearchTree.js";
import { AVLTree } from "./code/20.AVLTree.js";
import { RedBlackTree } from "./code/21.RedBlackTree.js";
import { MinHeap } from "./code/22.minHeap.js";

let heap = new MinHeap();

for (let i = 1; i < 10; i++) {
  heap.insert(i);
}

console.log("Extract minimum: ", heap.extract()); // 1
console.log(heap);

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
