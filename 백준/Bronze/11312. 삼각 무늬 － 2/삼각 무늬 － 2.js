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
  const [A, B] = input.shift().split(" ").map(BigInt);
  ans.push((A * A) / (B * B));
}

console.log(ans.join("\n"));
