const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim();

const S = BigInt(input);

let sum = 0n;
let i = 1n;

while (true) {
  sum += i;
  if (sum > S) {
    console.log((i - 1n).toString());
    break;
  }
  i++;
}
