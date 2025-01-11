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
  const newArr = Array.from({ length: R - L + 1 }, (_, idx) => L + idx);
  let count = 1;
  let now = newArr.indexOf(S);
  let state = 0;
  while (state < 1) {
    if (newArr[now] === L || newArr[now] === R) {
      state++;
    }
    now += count;
    if (count < 0) {
      count = -1 * (count - 1);
    } else {
      count = -1 * (count + 1);
    }
  }
  ans.push(Math.abs(count) - 1);
}

console.log(ans.join("\n"));
