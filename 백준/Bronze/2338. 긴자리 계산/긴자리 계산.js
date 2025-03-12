const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

const ans = new Array(3);

ans[0] = A + B;
ans[1] = A - B;
ans[2] = A * B;

console.log(ans.join("\n"));
