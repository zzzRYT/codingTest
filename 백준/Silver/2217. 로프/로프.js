const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = +input[0];
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let count = 1;
const ans = [];
while (count <= N) {
  let sum = arr[count - 1] * count;
  ans.push(sum);
  count++;
}

console.log(Math.max(...ans));
