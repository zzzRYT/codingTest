const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const count = Number(input[0]);

const memo = Array.from({ length: 41 }, () => [-1, -1]);

function fibonacci(n) {
  if (memo[n][0] !== -1 && memo[n][1] !== -1) {
    return memo[n];
  }

  if (n === 0) return (memo[0] = [1, 0]);
  if (n === 1) return (memo[1] = [0, 1]);

  const [zero1, one1] = fibonacci(n - 1);
  const [zero2, one2] = fibonacci(n - 2);
  memo[n] = [zero1 + zero2, one1 + one2];

  return memo[n];
}

const ans = [];

for (let i = 1; i <= count; i++) {
  const N = Number(input[i]);
  const [zero, one] = fibonacci(N);
  ans.push(`${zero} ${one}`);
}

console.log(ans.join("\n"));
