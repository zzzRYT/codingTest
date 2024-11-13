const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);

let max = input.pop();
let sum = input[0] + input[1];
if (max < sum) console.log(max + sum);
else if (max > sum) console.log(max - (max - sum + 1) + sum);
else if (max === sum) console.log(max - 1 + sum);
