const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const [K, N] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);

function binarySearch(start, end) {
  if (start > end) return end;
  let mid = Math.floor((end + start) / 2);

  const check = getCorrectNumber(mid);
  if (check < N) {
    return binarySearch(start, mid - 1);
  } else {
    return binarySearch(mid + 1, end);
  }
}

function getCorrectNumber(target) {
  if (target === 0) return 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(arr[i] / target);
  }
  return count;
}

const max = Math.max(...arr);
const ans = binarySearch(1, max);
console.log(ans);
