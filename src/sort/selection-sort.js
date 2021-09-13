import { defaultCompare, swap, Compare } from "../utils/index.js";

export const selectionSort = (array, compareFn = defaultCompare) => {
  const { length } = array;
  let indexMin;
  // 1、外层循环控制轮数
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    // 2、内层循环找出最小值
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      swap(array, indexMin, i);
    }
  }
  return array;
};
