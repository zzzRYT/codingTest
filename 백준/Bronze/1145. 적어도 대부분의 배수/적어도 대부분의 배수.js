const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ")
  .map(Number);

let count = 1;
while (true) {
  // 1부터 무한히 증가
  let countDivisible = 0;

  for (const num of input) {
    if (count % num === 0) {
      countDivisible++; 
    }
  }

  if (countDivisible >= 3) {
    console.log(count); 
    return;
  }
  count++;
}
