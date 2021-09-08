import { defaultCompare, swap } from "../utils/index.js";

// 堆化函数
function heapify(array, index, heapSize, compareFn) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < heapSize && compareFn(array[left], array[index]) > 0) {
    largest = left;
  }
  if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
    largest = right;
  }
  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}

// 构建最大堆
function buildMaxHeap(array, compareFn) {
  /**
   * 为什么是 Math.floor(array.length / 2)  ？？？ 书本上的解释是错的！！！
   * 
   * 因为 Math.floor(array.length / 2) 是最后一个叶子节点的父节点
   * 构建最大堆时，只需要对所有的小堆顶进行位置交换即可
   * 
   * 此处循环 i 即小堆顶元素下标，
   * Math.floor(array.length / 2)
   * Math.floor(array.length / 2) - 1
   * Math.floor(array.length / 2) - 2
   * Math.floor(array.length / 2) - 3
   * ... 依次获取小堆顶
   * 
   */
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

export default function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  
  // 交换最大堆中元素，每次交换最大堆根元素和最后一个元素
  // 并减小堆长度
  // 不断交换直至堆大小为 1，最大堆完成所有交换，排序完成
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}
