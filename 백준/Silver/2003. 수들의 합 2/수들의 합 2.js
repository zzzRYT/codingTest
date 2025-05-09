const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;
let start = 0;
let end = 0;
let ans = 0;

while (end < N) {
  sum += arr[end++];
  while (sum >= M) {
    if (sum === M) {
      ans++;
    }
    sum -= arr[start++];
  }
}

console.log(ans);
