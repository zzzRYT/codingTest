const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ");

const money = BigInt(input[0]);
const organisms = BigInt(input[1]);

console.log((money / organisms).toString());
console.log((money % organisms).toString());
