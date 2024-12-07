const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();
let answer = [];
let maxNum = Math.max(...input);
let arr = new Array(maxNum + 1).fill(1);
arr[0] = 0;
arr[1] = 0;

for (let i = 2; i <= Math.sqrt(maxNum); i++) {
  if (arr[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      arr[j] = 0;
    }
  }
}

for (let x of input) {
  let count = 0;
  for (let i = 2; i <= x / 2; i++) {
    if (arr[i] && arr[x - i]) count++;
  }
  answer.push(count);
}
console.log(answer.join("\n"));
