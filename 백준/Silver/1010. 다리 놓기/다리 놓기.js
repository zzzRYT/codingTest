const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input[0]);
let inputArr = [];
for (let i = 1; i <= count; i++) {
  inputArr.push(input[i].split(" "));
}

solution(inputArr);
function solution(inputArr) {
  let answer = [];
  inputArr.map((el) => {
    const n = +el[0];
    const m = +el[1];
    const memo = Array.from(Array(30), () => Array(30).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= m; j++) {
        if (j === i) {
          memo[i][j] = 1;
        } else if (i === 1) {
          memo[i][j] = j;
        } else {
          let temp = 0;
          for (let k = 1; k < j; k++) {
            temp += memo[i - 1][k];
          }
          memo[i][j] = temp;
        }
      }
    }
    answer.push(memo[n][m]);
  });
  console.log(answer.join("\n"));
}
