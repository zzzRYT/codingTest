let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const left = input[0].split("").reverse().join("");
const right = input[1].split("").reverse().join("");

if (left > right) {
  console.log(left);
} else {
  console.log(right);
}
