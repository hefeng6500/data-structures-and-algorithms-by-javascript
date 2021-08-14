import { defaultEquals } from "@utils";
import { Node, LinkList } from "@/code/1.LinkList";

export class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

export class DoublyLinkedList extends LinkList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = null;
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }
    const node = new DoublyNode(element);
    let current = this.head;
    if (index === 0) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      }
    } else if (index === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      current.prev = node;
      previous.next = node;
      node.prev = previous;
    }
    this.count++;
    return true;
  }

  push(element) {
    const node = new DoublyNode(element);
    if (this.count === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    }
    this.count++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return;
    }
    let current = this.head;
    if (index === 0) {
      this.head = this.head.next;
      if (this.count === 1) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if (index === this.count - 1) {
      current = this.tail;
      this.tail = current.prev;
      current.prev = null;
      this.tail.next = null;
    } else {
      current = this.getElementAt(index);
      const previous = current.prev;
      previous.next = current.next;
      current.next.prev = previous;

      // 移除被删元素的 prev next 指针
      current.prev = null;
      current.next = null;
    }
    this.count--;
    return this.current.element;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current.next !== null) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      index++;
    }
    return -1;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = null;
  }

  toString() {
    if (this.head === null) {
      return "";
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;
    // 这里使用 != 而不使用 !==， 因为 current 有时可能为 undefined
    while (current != null) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }

  // 反向打印链表
  inverseToString() {
    if (this.tail === null) {
      return "";
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    // 这里使用 != 而不使用 !==， 因为 current 有时可能为 undefined
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}
