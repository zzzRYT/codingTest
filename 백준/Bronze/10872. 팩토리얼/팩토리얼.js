const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").toString();

const count = Number(input);

const ans = factorial(count);
console.log(ans);

function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
