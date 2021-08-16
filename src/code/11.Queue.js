// enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
// dequeue()：移除队列的第一项（即排在队列最前面的项）并返回被移除的元素。
// peek()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack 类的peek 方法非常类似）。该方法在其他语言中也可以叫作front 方法。
// isEmpty()：如果队列中不包含任何元素，返回true，否则返回false
// size()：返回队列包含的元素个数，与数组的length 属性类似

export class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.items[this.lowestCount];
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

    for (let i = this.lowestCount + 1; i < this.count - this.lowestCount; i++) {
      string = `${string},${this.items[i]}`;
    }
    return string;
  }
}
