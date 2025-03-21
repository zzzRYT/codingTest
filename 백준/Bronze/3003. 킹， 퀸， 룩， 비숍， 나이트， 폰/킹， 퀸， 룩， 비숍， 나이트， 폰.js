const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ")
  .map(Number);

const fullSet = [1, 1, 2, 2, 2, 8];
const ans = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < input.length; i++) {
  ans[i] = fullSet[i] - input[i];
}
console.log(ans.join(" "));
