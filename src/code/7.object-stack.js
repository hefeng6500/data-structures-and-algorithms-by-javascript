export class ObjectStack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;

    // while (this.count) {
    //   this.pop();
    // }
  }
}
