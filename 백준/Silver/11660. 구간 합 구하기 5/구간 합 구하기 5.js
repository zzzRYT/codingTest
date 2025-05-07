const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const range = input.slice(N + 1).map((line) => line.split(" ").map(Number));
const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefixSum[i][j] =
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1] +
      arr[i - 1][j - 1];
  }
}

const ans = [];
for (let i = 0; i < M; i++) {
  const [x1, y1, x2, y2] = range[i];
  const partSum =
    prefixSum[x2][y2] -
    prefixSum[x1 - 1][y2] -
    prefixSum[x2][y1 - 1] +
    prefixSum[x1 - 1][y1 - 1];
  ans.push(partSum);
}

console.log(ans.join("\n"));
