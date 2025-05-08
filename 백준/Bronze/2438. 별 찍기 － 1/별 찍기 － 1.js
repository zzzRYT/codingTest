const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString();

let repeatCount = 1;

const ans = [];
for (let i = 0; i < +input; i++) {
  ans.push("*".repeat(repeatCount));
  repeatCount++;
}

console.log(ans.join("\n"));
