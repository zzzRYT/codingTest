const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//Kn + Pn^2
const C = input[0];
const K = input[1];
const P = input[2];

let ans = 0;
for (let i = 0; i <= C; i++) {
  ans += K * i + P * (i * i);
}

console.log(ans);
