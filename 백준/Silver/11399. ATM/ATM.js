const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const orders = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let ans = 0;
for (let i of orders) {
  sum += i;
  ans += sum;
}

console.log(ans);
