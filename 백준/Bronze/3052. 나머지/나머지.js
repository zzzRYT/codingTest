const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(numbers) {
  const sameRest = new Set();
  for (let i = 0; i < numbers.length; i++) {
    sameRest.add(numbers[i] % 42);
  }
  console.log(sameRest.size);
}

solution(input);
