const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const arr = input.shift().split(" ");

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min * max);
