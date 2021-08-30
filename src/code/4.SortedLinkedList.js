import { defaultEquals, defaultCompare } from "../utils/index.js";
import { LinkList } from "./1.LinkList.js";

export class SortedLinkedList extends LinkList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  push(element) {
    if (this.count === 0) {
      return super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      return super.insert(element, index);
    }
  }
  
  insert(element) {
    if (this.count === 0) {
      return super.insert(element, 0);
    } else {
      const index = this.getIndexNextSortedElement(element);
      return super.insert(element, index);
    }
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.count && current; i++) {
      const compare = this.compareFn(element, current.element);
      if (compare === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}
