const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = +input[0];
const paths = input[1].split(" ").map(Number);
const bases = input[2].split(" ").map(Number);

let cur = bases[0];
let cost = 0;

for (let i = 0; i < N - 1; i++) {
  cost += paths[i] * cur;
  if (cur > bases[i + 1]) {
    cur = bases[i + 1];
  }
}

console.log(cost);
