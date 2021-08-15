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

let res = new DoublyCircularLinkedList();
res.push(1);
res.push(2);
res.push(3);
res.push(4);
res.push(5);

console.log(res.toString());
console.log(res.inverseToString());

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
