const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(numbers) {
  const sameRest = {};
  for (let i = 0; i < numbers.length; i++) {
    sameRest[numbers[i] % 42] = 1;
  }
  console.log(Object.keys(sameRest).length);
}

solution(input);
