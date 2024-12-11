const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = input.shift();
let ans = [];

for (let i = 0; i < count; i++) {
  const arr = input[i].trim().split("");
  ans.push(getVPS(arr));
}

console.log(ans.join("\n"));

function getVPS(arr) {
  const vps = [];
  for (let i = 0; i < arr.length; i++) {
    if (vps.length === 0) {
      vps.push(arr[i]);
      continue;
    }
    if (arr[i] === ")" && vps[vps.length - 1] === "(") {
      vps.pop();
    } else {
      vps.push(arr[i]);
    }
  }
  return vps.length !== 0 ? "NO" : "YES";
}
