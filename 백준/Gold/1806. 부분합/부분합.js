const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let start = 0;
let end = 0;
let sum = 0;
let minLength = 100001;

while (end < N) {
  sum += arr[end];
  end++;
  while (sum >= S) {
    minLength = Math.min(minLength, end - start);
    sum -= arr[start];
    start++;
  }
}
if (minLength === 100001) {
  console.log(0);
} else {
  console.log(minLength);
}
