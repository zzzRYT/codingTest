const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const count = Number(input[0]);

const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < count; i++) {
  sum += A[i] * B[i];
}

console.log(sum);
