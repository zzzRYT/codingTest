const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

const S = new Array(N + 1).fill(0);
const ans = new Array(M);

for (let i = 1; i <= N; i++) {
  S[i] = S[i - 1] + arr[i - 1];
}

for (let i = 0; i < M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  ans[i] = S[end] - S[start - 1];
}
console.log(ans.join("\n"));
