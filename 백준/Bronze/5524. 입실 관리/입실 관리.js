const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, ...input] = fs
  .readFileSync(filePath, "utf8")
  .trim()
  .toString()
  .split("\n");

const arr = input.map((ele) => ele.toLowerCase());
console.log(arr.join("\n"));
