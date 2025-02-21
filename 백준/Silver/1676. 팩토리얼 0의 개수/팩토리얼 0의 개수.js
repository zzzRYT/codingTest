const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

//5의 배수마다 0이 1 개씩 증가
let num = Number(input);
let ans = 0;
while (num >= 5) {
  ans += Math.floor(num / 5);
  num = num / 5;
}
console.log(ans);
