const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const plans = input[0].split(" ").map(Number);

let times = 0;
for (let i = 0; i < count; i++) {
  times += plans[i];
}
times += (count - 1) * 8;

console.log(Math.floor(times / 24), times % 24);
