import { defaultCompare, Compare } from "../utils";

export const mergeSort = (array, compareFn = defaultCompare) => {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);

    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);

    array = merge(left, right, compareFn);
  }

  // 直至数组长度为 1 才返回数组
  return array;
};

export const merge = (left, right, compareFn) => {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    const item =
      compareFn(left[i], right[j]) === Compare.LESS_THAN
        ? left[i++]
        : right[j++];
    result.push(item);
  }

  const remain = i < left.length ? left.slice(i) : right.slice(j);
  return result.concat(remain);
};
