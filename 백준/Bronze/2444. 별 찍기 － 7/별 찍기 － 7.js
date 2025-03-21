const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const count = Number(input);
const num = Math.ceil((count * 2 - 1) / 2) - 1;
let start = num;
let end = num;

const ans = [];

for (let i = 0; i < count; i++) {
  let result = "";
  for (let j = 0; j < start; j++) {
    result += " ";
  }
  for (let j = start; j <= end; j++) {
    result += "*";
  }
  ans.push(result);
  start--;
  end++;
}

console.log(
  ans.join("\n") +
    "\n" +
    ans
      .slice(0, count - 1)
      .reverse()
      .join("\n")
);
