const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const ALength = Number(input.shift());
const obj = {};
const A = input
  .shift()
  .split(" ")
  .map(Number)
  .forEach((ele) => {
    obj[ele] = true;
  });

const count = Number(input.shift());
const checkArr = input.shift().split(" ").map(Number);
const ans = [];
for (let i = 0; i < count; i++) {
  ans.push(isIncludeInArr(obj, checkArr[i]));
}

console.log(ans.join("\n"));

function isIncludeInArr(obj, num) {
  if (obj[num]) return 1;
  return 0;
}
