const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
let max = 0;
const temp = [0];
let ans = 0;
let number = 0;
for (let i = 0; i < count; i++) {
  if (max < arr[i]) {
    max = arr[i];
    ans = 0;
    number++;
  } else {
    ans++;
  }
  temp[number] = ans;
}

console.log(Math.max(...temp));
