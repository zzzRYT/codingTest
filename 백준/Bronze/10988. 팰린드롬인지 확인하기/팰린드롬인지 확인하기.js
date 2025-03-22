const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const arr = input.split("");
const start = 0;
const end = arr.length - 1;

console.log(isPelliendrom(start, end));

function isPelliendrom(start, end) {
  if (start > end || end < start) {
    return 1;
  }
  if (arr[start] !== arr[end]) {
    return 0;
  }
  return isPelliendrom(start + 1, end - 1);
}
