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

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6);

console.log(tree);

const printNode = (value) => console.log(value);

tree.postOrderTraverse(printNode)

console.log('min', tree.min());
console.log('max', tree.max());

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

tree.remove(15)

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
