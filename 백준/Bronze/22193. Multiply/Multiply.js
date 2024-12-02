const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
input.shift();

console.log((BigInt(input[0])*BigInt(input[1])).toString());
