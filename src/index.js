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

// // 快速排序
// function quickSort(arr) {
//   if (arr.length < 1) {
//     return arr;
//   }
//   let middleIndex = Math.floor(arr.length / 2);
//   let middle = arr.splice(middleIndex, 1);
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < middle) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(middle, quickSort(right));
// }

const arr = [8, 1, 4, 9, 0, 3, 5, 2, 7, 6];

console.log(quickSort(arr));

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
