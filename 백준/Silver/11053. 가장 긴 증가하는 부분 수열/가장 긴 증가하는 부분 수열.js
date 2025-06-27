const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString().split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number);

const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
