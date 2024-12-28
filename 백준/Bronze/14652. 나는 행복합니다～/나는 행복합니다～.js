const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let row = 0;
let column = 0;

row = Math.floor(input[2] / input[1]);
column = input[2] % input[1];

console.log(row, column);
