const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

function getPlusPoly(str) {
  const NumberArr = str.split(/\+/).map(Number);
  return NumberArr.reduce((acc, cur) => acc + cur);
}

const arr = input.split(/\-/);

const result = [];

for (let i = 0; i < arr.length; i++) {
  result.push(getPlusPoly(arr[i]));
}

const ans = result.reduce((acc, cur) => acc - cur);
console.log(ans);
