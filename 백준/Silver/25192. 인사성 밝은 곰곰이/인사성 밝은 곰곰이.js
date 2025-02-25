const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
let ans = 0;
const arr = input.map((ele) => ele.trim());
const map = new Map();

for (let i = 0; i < count; i++) {
  if (arr[i] === "ENTER") {
    map.clear();
    continue;
  }
  if (map.has(arr[i])) {
    continue;
  } else {
    map.set(arr[i], true);
    ans++;
  }
}

console.log(ans);
