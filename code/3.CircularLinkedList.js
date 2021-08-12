function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
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
    for (let i = 0; i < this.count; i++) {
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

class CircularLinkedList extends LinkList {
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

  removeAt(index) {}
}
