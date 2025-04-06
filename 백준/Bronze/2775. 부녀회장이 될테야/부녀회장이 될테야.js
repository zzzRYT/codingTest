const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const memo = Array.from({ length: 15 }, () => new Array(15).fill(0));

function dp(k, n) {
  for (let i = 0; i < 15; i++) {
    memo[0][i] = i;
  }

  if (memo[k][n]) return memo[k][n];

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      memo[i][j] = memo[i][j - 1] + memo[i - 1][j];
    }
  }
  return memo[k][n];
}

const count = Number(input[0]);

const ans = [];

for (let i = 1; i <= count * 2; i += 2) {
  const k = Number(input[i]);
  const n = Number(input[i + 1]);
  const temp = dp(k, n);
  ans.push(temp);
}

console.log(ans.join("\n"));
