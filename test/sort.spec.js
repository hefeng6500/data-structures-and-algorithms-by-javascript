import { expect } from "chai";
import { createNonSortedArray } from "../src/utils";
import { bubbleSort } from "../src/sort/bubble-sort";
import { selectionSort } from "../src/sort/selection-sort";

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
});
