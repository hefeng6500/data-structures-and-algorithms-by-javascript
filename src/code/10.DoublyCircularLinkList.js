import { defaultEquals } from "@/utils/index";
import { DoublyLinkedList, DoublyNode } from "./2.DoublyLinkedList";

export class DoublyCircularLinkedList extends DoublyLinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return;
    }
    let node = new DoublyNode(element);
    let current = this.head;
    if (index === 0) {
      if (this.count === 0) {
        this.head = node;
        this.tail = node;
        this.tail.next = this.head;
        this.head.prev = this.tail;
      } else {
        let previous = current.prev;

        node.next = this.head;
        this.head.prev = node;

        previous.next = node;
        node.prev = previous;
        this.head = node;
      }
    } else if (index === this.count) {
      // 从链表尾部插入元素
      current = this.tail;
      const head = this.head;

      node.next = head;
      head.prev = node;

      current.next = node;
      node.prev = current;

      this.tail = node;
    } else {
      let current = this.getElementAt(index);
      let previous = current.prev;

      node.next = current;
      current.prev = node;

      node.prev = previous;
      previous.next = node;
    }
    this.count++;
    current = node;
    return current;
  }

  push(element) {
    let node = new DoublyNode(element);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    } else {
      let current = this.tail;
      const head = this.head;

      node.next = head;
      head.prev = node;

      current.next = node;
      node.prev = current;

      this.tail = node;
    }
    this.count++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count || this.isEmpty()) {
      return;
    }

    let current = this.head;
    if (index === 0) {
      if (this.count === 1) {
        this.tail = null;
        this.head = null;
      } else {
        this.head = this.head.next;
      }
    } else if (index === this.count - 1) {
      current = this.tail;
      const previous = current.prev;

      previous.next = current.next;
      current.next.prev = previous;

      this.tail = current.prev;
    } else {
      current = this.getElementAt(index);
      const previous = current.prev;

      previous.next = current.next;
      current.next.prev = previous;
    }
    this.count--;
    return current;
  }

  toString() {
    if (this.head === null) {
      return "";
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;
    // 这里使用 != 而不使用 !==， 因为 current 有时可能为 undefined
    while (current != null && current !== this.tail) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }

    objString = `${objString},${this.tail.element}`;
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
    while (previous != null && previous !== this.head) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }

    objString = `${objString},${this.head.element}`;
    return objString;
  }
}
