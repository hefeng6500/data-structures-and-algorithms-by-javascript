export function recursive(doIunderstandRecursion) {
  const recursionAnswer = confirm("do you understand recursive?");
  // 基线停止条件或停止点
  if (recursionAnswer) {
    return true;
  }
  recursive(recursionAnswer);
}

// 迭代求阶乘
export function factorialIterative(n) {
  if (n < 0) {
    return;
  }
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
  return result;
}

// 递归求阶乘
export function factorialRecursive(n) {
  if (n < 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// 迭代求斐波那契数列 0 1 1 2 3 5 8 13 21 ...
export function fibonnacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let first = 0;
  let last = 1;
  let result = n;

  for (let i = 2; i <= n; i++) {
    result = last + first;
    first = last;
    last = result;
  }

  return result;
}

// 斐波那契数
export function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 记忆化斐波那契数
export function fibonacciMemoization() {
  const memory = [0, 1];
  const fibonacci = (n) => {
    if (memory[n] != null) {
      return memory[n];
    }
    memory[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memory[n];
  };
  return fibonacci;
}
