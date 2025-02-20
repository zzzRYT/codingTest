const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const temp = new Array(100).fill([]);
const arr = temp.map(() => {
  return new Array(100).fill(0);
});

let max = 0;

for (let i = 0; i < input.length; i++) {
  const square = input[i].split(" ").map(Number);
  for (let y = square[1]; y < square[3]; y++) {
    if (y > max) max = y;
    for (let x = square[0]; x < square[2]; x++) {
      arr[y][x] += 1;
    }
  }
}

let ans = 0;

for (let i = 0; i <= max; i++) {
  const temp = arr[i].filter((ele) => ele !== 0);
  ans += temp.length;
}

console.log(ans);
