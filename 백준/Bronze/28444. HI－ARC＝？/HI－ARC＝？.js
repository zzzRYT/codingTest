const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ");

const H = Number(input.shift());
const I = Number(input.shift());
const A = Number(input.shift());
const R = Number(input.shift());
const C = Number(input.shift());

console.log(H * I - A * R * C);

