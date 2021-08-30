import { defaultEquals } from "../utils/index.js";
import { DoublyLinkedList } from "./2.DoublyLinkedList.js";

export class StackLinkedList {
  constructor(equalsFn = defaultEquals) {
    this.items = new DoublyLinkedList();
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.isEmpty()) {
      return;
    }
    return this.items.removeAt(this.items.size() - 1);
  }
}
