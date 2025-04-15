const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const N = Number(input[0]);
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = Number(input[2]);
const B = input[3].split(" ").map(Number);

function binarySearch(A, find) {
  let lo = 0;
  let hi = A.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (A[mid] === find) return 1;
    if (A[mid] < find) lo = mid + 1;
    else hi = mid - 1;
  }

  return 0;
}

const ans = [];
for (let i = 0; i < M; i++) {
  const findNumber = B[i];
  ans.push(binarySearch(A, findNumber));
}

console.log(ans.join("\n"));
