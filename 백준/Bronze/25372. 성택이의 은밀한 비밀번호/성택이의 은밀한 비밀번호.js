const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
let ans = [];
for (let i = 0; i < count; i++) {
  const temp = input.shift();
  if (temp.length >= 6 && temp.length <= 9) {
    ans.push("yes");
  } else {
    ans.push("no");
  }
}

console.log(ans.join("\n"));
