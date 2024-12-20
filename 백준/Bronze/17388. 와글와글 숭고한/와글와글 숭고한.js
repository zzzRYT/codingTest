const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ")
  .map(Number);

const sum = input.reduce((acc, cur) => acc + cur);

if (sum >= 100) {
  console.log("OK");
  return;
}
const min = Math.min(...input);
if (min === input[0]) {
  console.log("Soongsil");
} else if (min === input[1]) {
  console.log("Korea");
} else if (min === input[2]) {
  console.log("Hanyang");
}
