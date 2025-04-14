const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString();

let coin = BigInt(input);

function dp(coin) {
  const memo = new Array(coin + 1n).fill(0);

  memo[0] = 0;
  memo[1] = -1;
  memo[2] = 1;
  memo[3] = -1;

  for (let i = 4; i <= coin; i++) {
    if (i % 5 === 0) {
      memo[i] = memo[i - 5] + 1;
    } else {
      memo[i] = memo[i - 2] + 1;
    }
  }
  return memo[coin];
}

console.log(dp(coin));
