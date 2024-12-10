const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = input.shift();
const arr = [...input].map(Number);
const ans = [];
for (let i = 0; i < count; i++) {
  if (arr[i] === 0) {
    ans.pop();
  } else {
    ans.push(arr[i]);
  }
}

if (ans.length !== 0) {
  console.log(ans.reduce((acc, cur) => acc + cur));
} else {
  console.log(0);
}
