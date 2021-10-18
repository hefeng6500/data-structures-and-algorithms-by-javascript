// https://leetcode-cn.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    }
  }

  return -1;
};

// 左闭右开区间的解法： [left, right)
const search2 = function (nums, target) {
  let left = 0;
  let right = nums.length; // 注意，这里是 length，开区间

  while (left < right) {
    // 位运算：通过从左推入最左位的拷贝来向右位移，并使最右边的位脱落。
    // >> x 相当于除以 2 的 x 次方
    // >> 0 就是 Math.floor()，如： 9.9 >> 0，右移 0 位，即没有影响，浮点数进行位运算就相当于 Math.floor()
    let middle = (left + right) >> 1; 

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    }
  }

  return -1;
};

const nums = [-1,0,3,5,9,12];
const target = 9;

console.log(search(nums, target)); // 4
console.log(search2(nums, target)); // 4
