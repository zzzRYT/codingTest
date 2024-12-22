const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ");

//이항계수
const n = Number(input[0]);
const k = Number(input[1]);

const result = factorial(n) / (factorial(n - k) * factorial(k));

console.log(result);

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
