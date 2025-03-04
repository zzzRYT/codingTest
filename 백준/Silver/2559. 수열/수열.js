const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const count = N - (K - 1);
const S = new Array(count).fill(0);

for (let i = 0; i < count; i++) {
  let sum = 0;
  for (let j = i; j < i + K; j++) {
    sum += arr[j];
  }
  S[i] = sum;
}

console.log(Math.max(...S));
