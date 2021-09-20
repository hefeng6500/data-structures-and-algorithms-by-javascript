import { expect } from "chai";
import { createNonSortedArray } from "../src/utils";
import { bubbleSort } from "../src/sort/bubble-sort";
import { selectionSort } from "../src/sort/selection-sort";
import { insertionSort } from "../src/sort/insert-sort";
import { mergeSort } from "../src/sort/merge-sort";
import { quickSort } from "../src/sort/quick-sort";
import { countingSort } from "../src/sort/counting-sort";
import { bucketSort } from "../src/sort/bucket-sort";

describe("排序测试", () => {
  it("冒泡排序", () => {
    let array = createNonSortedArray(5);
    let originArray = [...array];
    let result = bubbleSort(array);

    expect(result.join(",")).to.equal(originArray.reverse().join(","));
  });

  it("选择排序", () => {
    let array = createNonSortedArray(5);
    let originArray = [...array];
    let result = selectionSort(array);

    expect(result.join(",")).to.equal(originArray.reverse().join(","));
  });

  it("插入排序", () => {
    let array = createNonSortedArray(5);
    let originArray = [...array];
    let result = insertionSort(array);

    expect(result.join(",")).to.equal(originArray.reverse().join(","));
  });

  it("归并排序", () => {
    let array = createNonSortedArray(5);
    let originArray = [...array];
    let result = mergeSort(array);

    expect(result.join(",")).to.equal(originArray.reverse().join(","));
  });

  it("快速排序", () => {
    let array = createNonSortedArray(5);
    let originArray = [...array];
    let result = quickSort(array);

    expect(result.join(",")).to.equal(originArray.reverse().join(","));
  });

  it("计数排序", () => {
    let array = createNonSortedArray(5);
    let originArray = [...array];
    let result = countingSort(array);

    expect(result.join(",")).to.equal(originArray.reverse().join(","));
  });

  it("桶排序", () => {
    let array = createNonSortedArray(5);
    let originArray = [...array];
    let result = bucketSort(array);

    expect(result.join(",")).to.equal(originArray.reverse().join(","));
  });
});
