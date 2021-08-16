// addFront(element)：该方法在双端队列前端添加新的元素。
// addBack(element)：该方法在双端队列后端添加新的元素（实现方法和 Queue 类中的 enqueue 方法相同）。
// removeFront()：该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中的 dequeue 方法相同）。
// removeBack()：该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中的 pop 方法一样）。
// peekFront()：该方法返回双端队列前端的第一个元素（实现方法和 Queue 类中的 peek 方法一样）。
// peekBack()：该方法返回双端队列后端的第一个元素（实现方法和 Stack 类中的 peek 方法一样）。

// 双端队列
export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.item[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[0] = element;
      this.lowestCount = 0;
      this.count++;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return;
    }
    return this.items[this.count];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let string = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      string = `${string},${this.items[i]}`;
    }
    return string;
  }
}
