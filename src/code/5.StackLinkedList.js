import { defaultEquals } from "@/utils/index";
import { DoublyLinkedList } from "./2.DoublyLinkedList";

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
