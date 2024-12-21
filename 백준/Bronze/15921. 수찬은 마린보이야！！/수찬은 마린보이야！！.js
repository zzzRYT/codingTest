const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, arr] = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

if (!arr) {
  console.log("divide by zero");
  return;
}
const practice = arr.split(" ").map(Number);
const sum = practice.reduce((acc, cur) => acc + cur);
const div = sum / count;

//기대값 = (첫번째 수 + 마지막 수) / 2
const sortPractice = practice.sort((a, b) => a - b);
const wish = (sortPractice[0] + sortPractice[count - 1]) / 2;
const result = Math.round(div / wish).toFixed(2);
console.log(result);
