const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const T = +input[0];

const ans = [];
for (let i = 1; i < T * 3; i += 3) {
  const [N, M] = input[i].split(" ").map(Number);
  const A = input[i + 1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const B = input[i + 2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < N; i++) {
    const temp = binarySearch(A[i], B, 0, M - 1);
    count += temp;
  }
  ans.push(count);
}

console.log(ans.join("\n"));

function binarySearch(target, arr, start, end) {
  if (arr[end] < target) {
    return end + 1;
  }
  if (arr[start] >= target) {
    return start;
  }
  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}
