const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const N = Number(input[0]);
const schedule = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [long, pay] = schedule[i];

  dp[i + 1] = Math.max(dp[i + 1], dp[i]);

  if (i + long <= N) {
    dp[i + long] = Math.max(dp[i + long], dp[i] + pay);
  }
}

console.log(Math.max(...dp));
