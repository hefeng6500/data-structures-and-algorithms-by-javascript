import { LinkList } from "@/code/1.LinkList";
import { DoublyLinkedList } from "@/code/2.DoublyLinkedList";
import { CircularLinkedList } from "@/code/3.CircularLinkedList";
import { SortedLinkedList } from "@/code/4.SortedLinkedList";
import { StackLinkedList } from "@/code/5.StackLinkedList";
import { Stack } from "./code/9.privite-weakmap-property-Stack";



let linklist = new Stack();

linklist.push(1);
linklist.push(2);
linklist.push(3);
linklist.pop();

console.log(linklist.toString());
