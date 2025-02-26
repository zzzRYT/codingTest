const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const arr = input.map((ele) => ele.trim().split(" "));

const set = new Set();

for (let i = 0; i < count; i++) {
  const cur = arr[i][0];
  const visit = arr[i][1];
  if (cur === "ChongChong" || visit === "ChongChong") {
    set.add("ChongChong");
  }
  if (set.has(cur)) {
    set.add(visit);
  }
  if (set.has(visit)) {
    set.add(cur);
  }
}

console.log(set.size);
