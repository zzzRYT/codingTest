const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input.shift().split(" ").map(Number);
const price = input.map(Number);
let ans = 0;

for (let i = N - 1; i >= 0; i--) {
  if (K <= 0) break;
  if (price[i] > K) continue;
  else {
    ans += Math.floor(K / price[i]);
    K = K % price[i];
  }
}

console.log(ans);
