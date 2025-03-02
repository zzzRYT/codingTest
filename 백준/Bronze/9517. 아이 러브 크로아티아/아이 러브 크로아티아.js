const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

let bomb = Number(input.shift());
const count = Number(input.shift());
let time = 210;

for (let i = 0; i < count; i++) {
  const temp = input.shift().trim().split(" ");
  const lessTime = Number(temp[0]);
  const call = temp[1];
  time -= lessTime;
  if (time <= 0) {
    break;
  }
  if (call === "T") {
    bomb++;
  }
  if (bomb > 8) {
    bomb = 1;
  }
}

console.log(bomb);
