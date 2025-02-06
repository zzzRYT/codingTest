const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n")
  .map(Number);

let ans = [];
for (let i = 0; i < input.length; i++) {
  const str = getString(input[i]);
  ans.push(divideString(str));
}

console.log(ans.join("\n"));

function getString(num) {
  const count = 3 ** num;
  return "-".repeat(count);
}

function divideString(str) {
  if (str.length / 3 < 1) {
    return str;
  }
  const temp = str.length / 3;
  const left = str.slice(0, temp);
  const right = str.slice(temp * 2);

  return divideString(left) + " ".repeat(temp) + divideString(right);
}
