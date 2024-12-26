const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const ans = `:fan::fan::fan:\n:fan::${input}::fan:\n:fan::fan::fan:`;
console.log(ans);
