const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const orders = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const ans = [];
for (let i = 0; i < count; i++) {
  temp = 0;
  for (let j = 0; j <= i; j++) {
    temp += orders[j];
  }
  ans.push(temp);
}

console.log(ans.reduce((acc, cur) => acc + cur));
