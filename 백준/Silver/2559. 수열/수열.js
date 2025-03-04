const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
let sum = 0;
const ans = [];

for (let i = 0; i < K; i++) {
  sum += arr[i];
}
ans.push(sum);

for (let i = K; i < N; i++) {
  sum = sum - arr[i - K] + arr[i];
  ans.push(sum);
}

console.log(Math.max(...ans));
