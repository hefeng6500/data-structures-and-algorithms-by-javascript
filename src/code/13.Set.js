// add(element)：向集合添加一个新元素。
// delete(element)：从集合移除一个元素。
// has(element)：如果元素在集合中，返回 true，否则返回 false。
// clear()：移除集合中的所有元素。
// size()：返回集合所包含元素的数量。它与数组的 length 属性类似。
// values()：返回一个包含集合中所有值（元素）的数组

export class Set {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }
}
