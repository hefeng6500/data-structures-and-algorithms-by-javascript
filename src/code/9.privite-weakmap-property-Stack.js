const items = new WeakMap();

export class WeakMapStack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const res = items.get(this);
    res.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    const res = items.get(this);
    const data = res.pop();
    return data;
  }

  peek() {
    const res = items.get(this);
    return res[res.length - 1];
  }

  isEmpty() {
    const res = items.get(this);
    return res.length === 0;
  }

  size() {
    const res = items.get(this);
    return res.length;
  }

  clear() {
    items.set(this, []);
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const result = items.get(this);
    let objString = `${result[0]}`;
    for (let i = 1; i < result.length; i++) {
      objString = `${objString},${result[i]}`;
    }
    return objString;
  }
}
