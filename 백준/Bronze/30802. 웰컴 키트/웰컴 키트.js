const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const count = Number(input.shift());
const size = input.shift().split(" ").map(Number);
const group = input.shift().split(" ").map(Number);

const sizeReduce = [];

for (let i = 0; i < size.length; i++) {
  const temp = size[i];
  sizeReduce.push(Math.ceil(temp / group[0]));
}

const sumT = sizeReduce.reduce((acc, cur) => acc + cur);
const groupPen = Math.floor(count / group[1]);
const beLeft = count % group[1];

console.log(sumT + "\n" + groupPen + "\n" + beLeft);
