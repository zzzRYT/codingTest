const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const money = input[0] * input[1] - input[2];
if (money <= 0) {
  console.log(0);
} else {
  console.log(money);
}
