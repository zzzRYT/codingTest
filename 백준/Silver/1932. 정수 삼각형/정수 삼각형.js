const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

//f(x) = 1번 줄 부터 N번줄 까지 중, 최대값의 경로 비용의 최대값

//f(x)
// 1. 인덱스 위치가 맨 왼쪽인 경우 무조건 오른쪽에서 내려옴
// 2. 인덱스 위치가 맨 뒤일 경우 무조건 왼쪽에서 내려옴
// 3. 인덱스가 중간에 있으면, 큰 값이 있는 쪽으로 내려옴

const N = Number(input[0]);
const arr = Array.from({ length: N }, () => new Array(N).fill(0));
const dp = Array.from({ length: N }, () => new Array(N).fill(0));

for (let i = 1; i <= N; i++) {
  const temp = input[i].split(" ").map(Number);
  arr[i - 1] = [...temp];
}

dp[0][0] = arr[0][0];
for (let i = 1; i < N; i++) {
  for (let j = 0; j <= arr[i].length - 1; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + arr[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + arr[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + arr[i][j];
    }
  }
}

console.log(Math.max(...dp[N - 1]));
