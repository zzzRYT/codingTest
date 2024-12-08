const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const count = Number(input);

let ans = 0;

// 제곱수를 구하는식
for (i = 1; i * i <= count; i++) {
  ans++;
}

console.log(ans);
