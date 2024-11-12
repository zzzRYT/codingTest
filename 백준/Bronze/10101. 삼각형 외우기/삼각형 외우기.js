const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

function solution(arr) {
  const obj = {};
  let total = arr.reduce((acc, cur) => acc + cur);
  if (total !== 180) {
    return "Error";
  }
  if (JSON.stringify(arr) == JSON.stringify([60, 60, 60])) return "Equilateral";
  arr.map((ele) => {
    if (obj[ele] === undefined) {
      obj[ele] = 1;
    } else {
      obj[ele] += 1;
    }
  });
  if (Object.keys(obj).length === 2) return "Isosceles";
  return "Scalene";
}

console.log(solution(input));
