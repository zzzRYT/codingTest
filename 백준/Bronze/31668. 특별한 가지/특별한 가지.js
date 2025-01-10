const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, M, K] = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n")
  .map(Number);

const lines = M / N;
console.log(lines * K);
