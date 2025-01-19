const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const prices = [350.34, 230.9, 190.55, 125.3, 180.9];

const count = Number(input.shift());
const ans = [];

for (let i = 0; i < count; i++) {
  const needs = input.shift().split(" ").map(Number);
  let total = 0;
  for (let j = 0; j < needs.length; j++) {
    total += prices[j] * needs[j];
  }
  ans.push("$" + total.toFixed(2));
}

console.log(ans.join("\n"));
