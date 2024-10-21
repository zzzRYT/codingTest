//여러 줄 입력
let fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(scores) {
  let totalScore = 0;
  let totalAvg = 0;
  for (let i = 0; i < scores.length; i++) {
    const [name, score, credit] = scores[i].split(" ");
    if (credit === "P") continue;
    totalAvg += Number(score) * getScore(credit);
    totalScore += Number(score);
  }
  return (totalAvg / totalScore).toFixed(6);
}

function getScore(credit) {
  const obj = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };
  return obj[credit];
}

console.log(solution(input));
