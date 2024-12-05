const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const count = input.shift();
let result = "";
for (let i = 0; i < count; i++) {
  let num = Number(input[i]);
  while (1) {
    if (isPrime(num)) break;
    num++;
  }
  result += num + "\n";
}
console.log(result);

function isPrime(num) {
  if (num === 1 || num === 0) return false;
  // Math.sqrt 함수를 사용하여 제곱근까지만 반복하도록 한다.
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
