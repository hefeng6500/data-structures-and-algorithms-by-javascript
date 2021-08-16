// 1. set(key,value)：向字典中添加新元素。如果key 已经存在，那么已存在的 value 会被新的值覆盖。
// 2. remove(key)：通过使用键值作为参数来从字典中移除键值对应的数据值。
// 3. hasKey(key)：如果某个键值存在于该字典中，返回true，否则返回false。
// 4. get(key)：通过以键值作为参数查找特定的数值并返回。
// 5. clear()：删除该字典中的所有值。
// 6. size()：返回字典所包含值的数量。与数组的length 属性类似。
// 7. isEmpty()：在size 等于零的时候返回true，否则返回false。
// 8. keys()：将字典所包含的所有键名以数组形式返回。
// 9. values()：将字典所包含的所有数值以数组形式返回。
// 10. keyValues()：将字典中所有[键，值]对返回。
// 11. forEach(callbackFn)：迭代字典中所有的键值对。callbackFn 有两个参数：key 和 value。该方法可以在回调函数返回false 时被中止（和Array 类中的every 方法相似）。

import { defaultToString } from "@/utils/index";

export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}, ${this.value}]`;
  }
}

export class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // 向字典中添加新元素。如果key 已经存在，那么已存在的 value 会被新的值覆盖
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  // remove(key)：通过使用键值作为参数来从字典中移除键值对应的数据值。
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  // 如果某个键值存在于该字典中，返回true，否则返回false。
  hasKey(key) {
    const tableKey = this.toStrFn(key);
    return this.table[tableKey] != null;
  }

  // 通过以键值作为参数查找特定的数值并返回。
  get(key) {
    if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)].value;
    }
    return;
  }

  // 删除该字典中的所有值。
  clear() {
    this.table = {};
  }

  // 返回字典所包含值的数量。与数组的length 属性类似。
  size() {
    return Object.keys(this.table).length;
  }

  // 在size 等于零的时候返回true，否则返回false。
  isEmpty() {
    return this.size() === 0;
  }

  // 将字典所包含的所有键名以数组形式返回
  keys() {
    return this.keyValues.map((valuePair) => valuePair.key);
  }

  // 将字典所包含的所有数值以数组形式返回
  values() {
    return this.keyValues.map((valuePair) => valuePair.value);
  }

  // 将字典中所有[键，值]对返回
  keyValues() {
    return Object.values(this.table);
  }

  // 迭代字典中所有的键值对。callbackFn 有两个参数：key 和 value。该方法可以在回调函数返回false 时被中止（和Array 类中的every 方法相似）
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
}
