//여러 줄 입력
let fs = require("fs");
var [count, numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let sum = numbers.split("").reduce((acc, cur) => Number(acc) + Number(cur));
console.log(sum);
