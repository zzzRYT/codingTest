const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const prefixSum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
const arr = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const K = +input[N + 1];

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < M + 1; j++) {
    prefixSum[i][j] =
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1] +
      arr[i - 1][j - 1];
  }
}

const ans = [];

for (let v = N + 2; v < N + 2 + K; v++) {
  const [i, j, x, y] = input[v].split(" ").map(Number);
  const partSum =
    prefixSum[x][y] -
    prefixSum[i - 1][y] -
    prefixSum[x][j - 1] +
    prefixSum[i - 1][j - 1];
  ans.push(partSum);
}
console.log(ans.join("\n"));
