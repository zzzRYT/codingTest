const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("")
  .map((v) => Number(v));

const temp = input.sort((a, b) => b - a);
console.log(temp.join(""));
