function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class LinkList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  // 向链表尾部添加一个新元素
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  // 向链表的特定位置插入一个新元素
  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }

    const node = new Node(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      node.next = previous.next;
      previous.next = node;
    }
    this.count++;
  }

  // 返回链表中特定位置的元素。如果链表中不存在这样的元素， 则返回 undefined
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }
      return node;
    }
    return;
  }

  // 从链表中移除一个元素
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 从链表的特定位置移除一个元素
  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }

  // 如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false
  isEmpty() {
    return this.size() === 0;
  }

  // 返回链表包含的元素个数，与数组的 length 属性类似
  size() {
    return this.count;
  }

  // 清空链表
  clear() {
    this.head = undefined;
    this.count = 0;
  }

  // 返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
  toString() {
    if (this.head === null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 0; i < this.count && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkList {
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
