const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString();

function solution(num) {
  for (let i = 1; i <= num; i++) {
    const temp = String(i)
      .split("")
      .reduce((acc, cur) => Number(acc) + Number(cur));
    if (i + Number(temp) === num) {
      return i;
    }
  }
  return 0;
}

console.log(solution(Number(input)));
