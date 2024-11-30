const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

//최소 공배수 = 두 수의 곱 / 최대공약수

const count = Number(input.shift());
let result = "";
for (let i = 0; i < count; i++) {
  let num1 = Number(input[i][0]);
  let num2 = Number(input[i][1]);
  let minNum = (num1 * num2) / Euclidean(num1, num2);
  result += minNum + "\n";
}

console.log(result);

//최대공약수 - 유클리드 호제법
function Euclidean(a, b) {
  if (b === 0) {
    return a;
  } else if (a % b === 0) {
    return b;
  } else {
    return Euclidean(b, a % b);
  }
}
