const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const N = BigInt(input);
const dp = Array(91).fill(0n);

dp[1] = 1n;

for (let i = 2n; i <= N; i++) {
  dp[i] = dp[i - 1n] + dp[i - 2n];
}

console.log(dp[N].toString());
