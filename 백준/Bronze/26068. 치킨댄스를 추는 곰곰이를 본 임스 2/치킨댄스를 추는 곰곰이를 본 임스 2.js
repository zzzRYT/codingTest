const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const N = Number(input[0]);
let ans = 0;

for (let i = 1; i <= N; i++) {
  const leftDate = Number(input[i].split("-")[1]);
  if (leftDate <= 90) {
    ans++;
  }
}
console.log(ans);
