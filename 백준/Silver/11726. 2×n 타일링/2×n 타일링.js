const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString();

const N = +input;
const dp = new Array(N + 1).fill(0);

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= N; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[N]);
