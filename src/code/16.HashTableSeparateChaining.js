import { LinkList } from "./1.LinkList";
import { defaultToString, ValuePair } from "./14.Dictionary";

export class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // 散列函数
  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    const linklist = this.table[position];
    if (linklist != null && !linklist.isEmpty()) {
      let current = linklist.getHead();
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return;
  }

  remove(key) {
    const position = this.hashCode(key);
    const linklist = this.table[position];
    if (linklist != null && !linklist.isEmpty()) {
      let current = linklist.getHead();
      while (current != null) {
        if (current.element.key === key) {
          linklist.remove(current.element);
          if (linklist.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}
