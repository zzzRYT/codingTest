const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const T = Number(input.shift());
const ans = [];
for (let i = 0; i < T; i++) {
  const [L, R, S] = input.shift().split(" ").map(Number);
  let count = 1;
  let now = S;
  while (true) {
    now += count;
    if (count < 0) {
      count = -1 * (count - 1);
    } else {
      count = -1 * (count + 1);
    }
    if (now === L || now === R) break;
  }
  ans.push(Math.abs(count));
}

console.log(ans.join("\n"));
