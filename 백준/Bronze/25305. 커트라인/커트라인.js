const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, ...scores] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

let cut = Number(count[1]) - 1;
scores[0].sort((a, b) => b - a);
console.log(scores[0][cut]);
