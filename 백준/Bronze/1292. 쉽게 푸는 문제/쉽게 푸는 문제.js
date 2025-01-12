const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ");

const A = Number(input[0]);
const B = Number(input[1]);
let state = 1;
let ans = 0;
let count = 0;

for (let i = 1; i <= B; i++) {
  if (count === state) {
    state++;
    count = 0;
  }
  count++;
  if (i >= A && i <= B) {
    ans += state;
  }
}
console.log(ans);
