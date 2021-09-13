import { bubbleSort } from "../src/sort/bubble-sort";
import { createNonSortedArray } from "../src/utils";
import { expect } from "chai";

describe("测试冒泡排序", () => {
  it("测试用例", () => {
    let array = createNonSortedArray(5);
    let originArray = [...array]
    let result = bubbleSort(array);

    expect(result.join(",")).to.equal(originArray.reverse().join(","));
  });
});

