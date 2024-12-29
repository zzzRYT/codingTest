const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const count = Number(input.shift());
const arr = input.shift().split("").map(Number);

let even = 0; //짝수
let odd = 0; //홀수
for (let i = 0; i < count; i++) {
  if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

if (even > odd) {
  console.log(0);
} else if (odd > even) {
  console.log(1);
} else {
  console.log(-1);
}
