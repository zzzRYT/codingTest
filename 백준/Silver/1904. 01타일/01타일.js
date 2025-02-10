const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

function dp(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;
  const ans = new Array(num).fill(0);

  //초기값
  ans[0] = 1;
  ans[1] = 2;

  //점화식
  for (let i = 2; i < num; i++) {
    ans[i] = (ans[i - 1] + ans[i - 2]) % 15746;
  }
  return ans[num - 1];
}

console.log(dp(Number(input)));
