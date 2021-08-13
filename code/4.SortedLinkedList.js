const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkList {
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
