const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const N = Number(input[0]);

//어떻게 칠하든, 마지막은 RGB중 하나가 될 것
//마지막이 R인경우
//f(x) ->R, G, B 중 작은 값
//f(x) = Math.min(r(x),g(x),b(x))
//r(x) = Math.min(g(x-1), b(x-1)) + 마지막 집 R로 칠하는 비용
//g(x) = Math.min(r(x-1), b(x-1)) + 마지막 집을 G로 칠하는 비용
//b(X) = Math.min(r(x-1), g(x-1)) + 맘지막 집을 B로 칠하는 비용

const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

dp[1][0] = arr[0][0];
dp[1][1] = arr[0][1];
dp[1][2] = arr[0][2];

for (let i = 1; i <= N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i - 1][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i - 1][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i - 1][2];
}

console.log(Math.min(dp[N][0], dp[N][1], dp[N][2]));
