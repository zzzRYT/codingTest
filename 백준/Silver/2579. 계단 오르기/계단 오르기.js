const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, ...arr] = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const stair = [0, ...arr.map(Number)];
const c = Number(count);
if (c === 1) {
  console.log(stair[1]);
  return;
}
const dp = Array.from({ length: c + 1 }, () => Array(2).fill(0));
dp[1][0] = stair[1];
dp[1][1] = stair[1];
if (c > 1) {
  dp[2][0] = dp[1][1] + stair[2];
  dp[2][1] = stair[2];
}
for (let i = 3; i <= c; i++) {
  dp[i][0] = stair[i] + dp[i - 1][1];
  dp[i][1] = stair[i] + Math.max(dp[i - 2][0], dp[i - 2][1]);
}

console.log(Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1]));
