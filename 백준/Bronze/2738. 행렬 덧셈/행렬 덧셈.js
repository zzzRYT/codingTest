//여러 줄 입력
let fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

const [N, M] = input.shift();
let arr = new Array(N).fill().map(() => new Array(M).fill(0));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr[i][j] = input[i][j] + input[i + N][j];
  }
}
let answer = "";

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    answer += arr[i][j] + " ";
  }
  answer += "\n";
}
console.log(answer.trim());
