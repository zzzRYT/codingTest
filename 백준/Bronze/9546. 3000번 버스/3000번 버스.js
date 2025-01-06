const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const ans = [];
for (let i = 0; i < count; i++) {
  let curNumber = 0;
  for (let j = 0; j < Number(input[i]); j++) {
    curNumber = (curNumber + 0.5) * 2;
  }
  ans.push(curNumber);
}

console.log(ans.join("\n"));
