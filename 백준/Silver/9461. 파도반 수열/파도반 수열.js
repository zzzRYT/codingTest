const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const ans = [];
for (let i = 0; i < count; i++) {
  ans.push(getDp(Number(input.shift())));
}

console.log(ans.join("\n"));

function getDp(num) {
  const memo = new Array(num + 1).fill(0);
  memo[1] = 1;
  memo[2] = 1;
  memo[3] = 1;

  for (let i = 4; i <= num + 1; i++) {
    //점화식
    memo[i] = memo[i - 2] + memo[i - 3];
  }
  return memo[num];
}
