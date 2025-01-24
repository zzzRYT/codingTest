const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");
const now = new Date(input.shift());
const count = Number(input.shift());
let ans = 0;

for (let i = 0; i < count; i++) {
  const expirationDate = new Date(input[i]);
  if (expirationDate >= now) {
    ans++;
  }
}

console.log(ans);
