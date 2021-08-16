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

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash);

console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');

console.log(hash.get('Gandalf')); // gandalf@email.com
console.log(hash.get('Loiane')); // undefined

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
