function find(a, length, key) {
  if (a == null || length <= 0) {
    return -1;
  }

  let i = 0;
  // 这里有两个比较操作：i<n 和 a[i]==key.
  while (i < length) {
    if (a[i] == key) {
      return i;
    }
    ++i;
  }

  return -1;
}

function find2(a, length, key) {
  if(a == null || length <= 0) {
    return -1;
  }
  
  // 这里因为要将 a[n-1] 的值替换成 key，所以要特殊处理这个值
  if (a[length-1] == key) {
    return length-1;
  }
  
  // 把 a[n-1] 的值临时保存在变量 tmp 中，以便之后恢复。tmp=6。
  // 之所以这样做的目的是：希望 find() 代码不要改变 a 数组中的内容
  let tmp = a[length-1];
  // 把 key 的值放到 a[n-1] 中，此时 a = {4, 2, 3, 5, 9, 7}
  a[length-1] = key;
  
  let i = 0;
  // while 循环比起代码一，少了 i<n 这个比较操作
  while (a[i] != key) {
    ++i;
  }
  
  // 恢复 a[n-1] 原来的值, 此时 a= {4, 2, 3, 5, 9, 6}
  a[length-1] = tmp;
  
  if (i == length-1) {
    // 如果 i == n-1 说明，在 0...n-2 之间都没有 key，所以返回 -1
    return -1;
  } else {
    // 否则，返回 i，就是等于 key 值的元素的下标
    return i;
  }
}

let stringCode = "";
for (let i = 0; i < 50000000; i++) {
  stringCode += 1;
}

stringCode += "9";

let start1 = Date.now();
find(stringCode, stringCode.length, "9");
let end1 = Date.now();

console.log(end1 - start1); // 1690

let start2 = Date.now();
find2(stringCode, stringCode.length, "9");
let end2 = Date.now();

console.log(end2 - start2); // 1
