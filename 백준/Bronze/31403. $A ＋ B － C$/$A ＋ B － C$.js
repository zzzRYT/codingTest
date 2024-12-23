const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

console.log(Number(input[0]) + Number(input[1]) - Number(input[2]));
console.log(input[0] + input[1] - input[2]);
