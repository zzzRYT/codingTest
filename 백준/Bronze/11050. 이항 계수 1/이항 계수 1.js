const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, K] = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);


//dp를 더함
//동적계획법은 = 한 문제를 작은 단위의 문제로 쪼개어 푸는 방법

const ans3 = dp(N, K);
console.log(ans3);

function dp(n, r) {
  const cache = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    cache[i][0] = 1;
  }
  for (let i = 0; i <= r; i++) {
    cache[i][i] = 1;
  }

  // 3.
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, r); j++) {
      cache[i][j] = cache[i - 1][j] + cache[i - 1][j - 1];
    }
  }

  return cache[n][r];
}