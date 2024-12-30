const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, M] = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 1;
let ans = "";
for (let i = 0; i < N; i++) {
  ans += Array.from({ length: M }, () => count++).join(" ");
  ans += "\n";
}

console.log(ans);
