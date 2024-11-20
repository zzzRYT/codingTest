const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, ...num] = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

num.sort((a, b) => a - b);
// 모든 원소의 값이 0보다 크거나 같다고 가정한다.
console.log(num.join("\n")); // [0, 1, 2, 3, 4, 5]
