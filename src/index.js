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
import { MaxHeap, MinHeap } from "./code/22.MinHeap.js";
import heapSort from "./sort/heap-sort.js";
import { Graph } from "./code/23.Graph.js";
import { breadthFirstSearch, BFS } from "./code/24.breadth-first-search.js";
import { bubbleSort } from "./sort/bubble-sort.js";
import { selectionSort } from "./sort/selection-sort.js";
import { LRU } from "../exercise/LRU";
import { insertionSort } from "./sort/insert-sort.js";
import { mergeSort } from "./sort/merge-sort.js";
import { quickSort } from "./sort/quick-sort.js";
import { countingSort } from "./sort/counting-sort.js";

const arr = [50, 3, 2, 2, 1];

console.log(countingSort(arr));

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
