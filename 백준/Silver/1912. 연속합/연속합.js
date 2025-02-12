const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const memo = new Array(count).fill(0);

memo[0] = arr[0];

for (let i = 1; i < count; i++) {
  if (memo[i - 1] < 0) {
    memo[i] = arr[i];
    continue;
  }
  memo[i] = memo[i - 1] + arr[i];
}

console.log(Math.max(...memo));
