const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

console.log(input.reduce((acc, cur) => acc + cur) / 5);
console.log(input.sort((a, b) => a - b)[2]);
