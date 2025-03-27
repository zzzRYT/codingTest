const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n").map(BigInt);

const T = input[0];
const ans = [];

for (let i = 1; i <= T; i++) {
  ans.push(findMaxSteps(input[i]));
}
console.log(ans.join("\n"));

function findMaxSteps(N) {
  let left = 1n,
    right = 2n * N,
    answer = 1n;

  while (left <= right) {
    let mid = (left + right) / 2n;
    let sum = (mid * (mid + 1n)) / 2n; // 1 + 2 + ... + mid

    if (sum <= N) {
      answer = mid;
      left = mid + 1n;
    } else {
      right = mid - 1n;
    }
  }
  return answer;
}
