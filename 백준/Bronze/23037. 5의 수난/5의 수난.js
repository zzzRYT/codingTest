const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("")
  .map(Number);

let ans = 0;
for (let i = 0; i < input.length; i++) {
  ans += input[i] ** 5;
}

console.log(ans);
