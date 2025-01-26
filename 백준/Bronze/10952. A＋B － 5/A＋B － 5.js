const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = input.length;
const ans = [];
for (let i = 0; i < count - 1; i++) {
  const temp = input.shift().split(" ").map(Number);
  ans.push(temp[0] + temp[1]);
}

console.log(ans.join("\n"));
