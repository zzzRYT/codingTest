const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString();

const result =
  (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6);
console.log(`${result}\n${3}`);
