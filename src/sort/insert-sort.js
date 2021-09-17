import { defaultCompare, Compare } from "../utils";

/**
 * 插入排序
 * @param {Array} array 
 * @param {Function} compareFn 
 * @returns 

主要思路： 假定第一项已经排序了。接着，
它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确
排序，接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推

 *
 */
export const insertionSort = (array, compareFn = defaultCompare) => {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i;
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array
};
