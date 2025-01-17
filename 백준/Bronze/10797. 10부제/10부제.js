const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const day = Number(input.shift());
const cars = input.shift().split(" ").map(Number);
let ans = 0;

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === day) ans++;
}
console.log(ans);
