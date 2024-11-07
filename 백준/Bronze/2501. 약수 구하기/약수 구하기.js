const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const N = Number(input[0]);
const index = Number(input[1]) - 1;
const result = [];

for (let i = 1; i <= Math.sqrt(N); i++) {
  if (N % i === 0) {
    result.push(i);
    if (i !== N / i) result.push(N / i);
  }
}
result.sort((a, b) => a - b);
if (result[index] === undefined) {
  console.log(0);
} else {
  console.log(result[index]);
}
