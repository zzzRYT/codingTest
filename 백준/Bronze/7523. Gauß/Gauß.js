const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = input.shift();
const ans = [];
const arr = input.map((ele) => ele.split(" ").map((v) => BigInt(v)));
for (let i = 0; i < count; i++) {
  const n = arr[i][0];
  const m = arr[i][1];
  const sum = ((n + m) * (m - n + 1n)) / 2n;
  ans.push(`Scenario #${i + 1}:\n${sum}`);
}

console.log(ans.join("\n\n"));
