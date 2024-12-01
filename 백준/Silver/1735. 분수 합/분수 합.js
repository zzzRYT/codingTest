const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [n1, n2] = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const fraction1 = n1.split(" ").map(Number);
const numerator1 = fraction1[0];
const denominator1 = fraction1[1];

const fraction2 = n2.split(" ").map(Number);
const numerator2 = fraction2[0];
const denominator2 = fraction2[1];

const newNumerator = numerator1 * denominator2 + denominator1 * numerator2;
const newDenominator = denominator1 * denominator2;

const div = Euclidean(newNumerator, newDenominator);
console.log(newNumerator / div, newDenominator / div);

//최대 공약수 구하기
function Euclidean(a, b) {
  if (b === 0) {
    return a;
  } else if (a % b === 0) {
    return b;
  } else {
    return Euclidean(b, a % b);
  }
}
