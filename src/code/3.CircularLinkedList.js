import { defaultEquals } from "@utils";
import { Node, LinkList } from "@/code/1.LinkList";

export class CircularLinkedList extends LinkList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }
    let node = new Node(element);
    let current = this.head;
    if (index === 0) {
      if (this.head === null) {
        this.head = node;
        node.next = node;
      } else {
        node.next = current;
        current = this.getElementAt(this.count - 1);
        this.head = node;
        current.next = this.head;
      }
    } else {
      let previous = this.getElementAt(index - 1);
      node.next = previous.next;
      previous.next = node;
    }
    this.count++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return;
    }
    let current = this.head;
    if (index === 0) {
      if (this.count === 1) {
        this.head = null;
      } else {
        const removed = this.head;
        current = this.getElementAt(this.count - 1);
        this.head = this.head.next;
        current.next = this.head;
        current = removed;
      }
    } else {
      let previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }
}
