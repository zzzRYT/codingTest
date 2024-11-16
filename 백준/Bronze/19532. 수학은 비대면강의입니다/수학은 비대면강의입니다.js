const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [a, b, c, d, e, f] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const divisor = a * e - b * d;

const x = parseInt((c * e - b * f) / divisor);
const y = parseInt((a * f - c * d) / divisor);

console.log(x, y);
