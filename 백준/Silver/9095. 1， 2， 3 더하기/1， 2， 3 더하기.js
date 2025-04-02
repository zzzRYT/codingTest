const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString().split("\n");

const memo = [];
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

function dp(n) {
  //초기식
  if (n < 1) return 0;

  if (memo[n]) return memo[n];
  //점화식
  //f(n) = f(n - 1) + f(n - 2) + f(n - 3);
  let temp = dp(n - 1) + dp(n - 2) + dp(n - 3);
  memo[n] = temp;
  return temp;
}

const ans = [];
const count = Number(input[0]);
for (let i = 1; i <= count; i++) {
  const n = Number(input[i]);
  ans.push(dp(n));
}

console.log(ans.join("\n"));
