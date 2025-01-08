const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ");

const num1 = BigInt(input[0]);
const num2 = BigInt(input[1]);

console.log((num1 + num2).toString());
