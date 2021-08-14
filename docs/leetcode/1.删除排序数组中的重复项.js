let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let nums2 = [1, 1, 2];

function removeDuplicates(nums) {
  let slow = 0;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[fast] === nums[slow]) {
      nums.splice(fast, 1);
    } else {
      slow = fast;
      fast++;
    }
  }
  return nums.length;
}

function removeDuplicates(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = true;
    } else {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicates(nums));
console.log(removeDuplicates(nums2));
