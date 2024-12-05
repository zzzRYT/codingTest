const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = getPrime(input[1]);
let result = "";
for (let i = input[0]; i <= input[1]; i++) {
  if (arr[i]) {
    result += i + "\n";
  }
}
console.log(result);

function getPrime(num) {
  const arr = new Array(num + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}
