import heapSort from "../src/sort/heap-sort.js";
import { expect } from "chai";
import { reverseCompare, defaultCompare } from "../src/utils";

describe("堆排序测试", () => {
  it("堆排序正序测试", () => {
    const originData = [72, 16, 5, 234, 23, 92, 109];
    // 默认构建最大堆
    const res = heapSort(originData);
    const expectRes = [5, 16, 23, 72, 92, 109, 234];

    expect(res.join(",")).to.equal(expectRes.join(","));
  });

  it("堆排序逆序测试", () => {
    const originData = [72, 16, 5, 234, 23, 92, 109];
    // 构建最小堆
    const res = heapSort(originData, reverseCompare(defaultCompare));
    const expectRes = [5, 16, 23, 72, 92, 109, 234];

    expect(res.join(",")).to.equal(expectRes.reverse().join(","));
  });
});
