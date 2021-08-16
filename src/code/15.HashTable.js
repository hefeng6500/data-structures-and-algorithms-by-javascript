// put(key,value)：向散列表增加一个新的项（也能更新散列表）。
// remove(key)：根据键值从散列表中移除值。
// get(key)：返回根据键值检索到的特定的值。

import { defaultToString } from "@/utils/index";
import { ValuePair } from "./14.Dictionary";

export class HashTable {
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
    return hash % 99;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  // 向散列表增加一个新的项（也能更新散列表）。
  put(key, value) {
    if (key != null && value != null) {
      const hashKey = this.hashCode(key);
      this.table[hashKey] = new ValuePair(key, value);
    }
  }

  // 根据键值从散列表中移除值。
  remove(key) {
    const hashKey = this.hashCode(key);
    const valuePair = this.table[hashKey];
    if (valuePair != null) {
      delete this.table[hashKey];
      return true;
    }
    return false;
  }

  // 返回根据键值检索到的特定的值。
  get(key) {
    const hashKey = this.hashCode(key);
    const valuePair = this.table[hashKey];
    return valuePair ? valuePair.value : undefined;
  }
}
