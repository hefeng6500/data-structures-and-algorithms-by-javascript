import { defaultCompare, Compare, swap } from "../utils";

// algotithms from https://www.icourse163.org/learn/ZJU-93001?tid=1002654021#/learn/content?type=detail&id=1003627012&cid=1004311523

export const quickSort = (array, compareFn = defaultCompare) => {
  return quick(array, 0, array.length - 1, compareFn);
};

export const quick = (array, left, right, compareFn) => {
  // 选择主元
  const pivot = median3(array, left, right, compareFn);
  console.log("array", array , "pivot", pivot);

  let i = left; // 左指针
  let j = right - 1; // 右指针

  while (j >= 0 && i <= array.length && i < j) {
    while (compareFn(array[++i], pivot) === Compare.LESS_THAN) {}
    while (compareFn(array[--j], pivot) === Compare.BIGGER_THAN) {}

    if (i < j) {
      swap(array, i, j);
    }
  }

  // 将 i 的位置元素与主元进行交换，此时主元就（一次性的）回到了它正确的位置
  swap(array, i, right - 1);

  console.log("array:", array, "i: ", i, "j: ", j);
  if (left < i - 1) {
    quick(array, left, i - 1, compareFn);
  }
  if (right > i + 1) {

    
    quick(array, i + 1, right, compareFn);
  }

  return array;
};

export const median3 = (array, left, right, compareFn) => {
  let center = Math.floor((left + right) / 2);
  if (compareFn(array[left], array[center]) === Compare.BIGGER_THAN) {
    swap(array, left, center);
  }
  if (compareFn(array[left], array[right]) === Compare.BIGGER_THAN) {
    swap(array, left, right);
  }
  if (compareFn(array[center], array[right]) === Compare.BIGGER_THAN) {
    swap(array, center, right);
  }

  // center 就是主元，主元选择完成后，将它放在 right - 1 位置上
  // 后续只要比较 left + 1 到 right - 2 位置的值了
  swap(array, center, right - 1);

  return array[right - 1];
};

/**
 * 快速排序
 * auth by ruanyifeng

 * @param {*} arr 
 * @returns 
 */
export const quickSort2 = (arr) => {
  if (arr.length < 1) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2);
  let middle = arr.splice(middleIndex, 1);

  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort2(left).concat(middle, quickSort(right));
};
