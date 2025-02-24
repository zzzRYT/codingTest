const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());

if (count === 0) {
  return console.log(0);
}
const arr = input.map(Number).sort((a, b) => a - b);

const interceptAverage = Math.round(count * (15 / 100));

arr.splice(0, interceptAverage);
arr.splice(-interceptAverage, interceptAverage);

const ans = arr.reduce((acc, cur) => acc + cur) / arr.length;

console.log(Math.round(ans));
