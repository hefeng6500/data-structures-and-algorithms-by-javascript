import { defaultCompare, swap, Compare } from "../utils/index.js";

export const bubbleSort = (array, compareFn = defaultCompare) => {
  let length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      // length - 1: 两两比较， n 个元素只需要进行 n-1 次比较
      // length - 1 - i: 再 -i，原因是每轮循环最后一个元素元素其实已经排好序了，不需要再比较
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};
