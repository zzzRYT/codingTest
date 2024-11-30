const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").toString().trim().split(" ");

//최소 공배수 = 두 수의 곱 / 최대공약수

let num1 = Number(input[0]);
let num2 = Number(input[1]);
console.log((num1 * num2) / Euclidean(num1, num2));

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
