const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const arr = new Array(count);
arr[0] = 0;
for (let i = 1; i <= count; i++) {
  arr[i] = Number(input[i - 1]);
}

const dp = Array.from({ length: count + 1 });

dp[1] = arr[1];
dp[2] = dp[1] + arr[2];
dp[3] = Math.max(arr[1], arr[2]) + arr[3];

//마지막 직전 계단을 밟은 경우
//d[n] = dp[n-3] + arr[n-1] + arr[n];
//마지막 2번 째 전 계단을 밟은 경우
//dp[n] = dp[n-2] + arr[n];
for (let i = 4; i <= count; i++) {
  dp[i] = Math.max(dp[i - 3] + arr[i - 1] + arr[i], dp[i - 2] + arr[i]);
}

console.log(dp[count]);
