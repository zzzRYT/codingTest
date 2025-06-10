const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim();

const digits = input.split("").map(Number);

if (!digits.includes(0)) {
  console.log(-1);
  return;
}

const sum = digits.reduce((acc, cur) => acc + cur, 0);
if (sum % 3 !== 0) {
  console.log(-1);
  return;
}

digits.sort((a, b) => b - a);
console.log(digits.join(""));
