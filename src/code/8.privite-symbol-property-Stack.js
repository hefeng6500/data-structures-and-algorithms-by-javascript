const _items = Symbol("stackItems");
export class Stack {
  constructor() {
    this[_items] = [];
  }

  push(element) {
    this[_items].push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    this[_items].pop();
  }

  peek() {
    return this[_items][this.count - 1];
  }

  isEmpty() {
    return this[_items].length === 0;
  }

  clear() {
    this[_items] = [];
  }
}
