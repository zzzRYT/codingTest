const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number); // 문제 제출 시

function solution(students) {
  const allStudents = Array.from({ length: 30 }, (_, i) => i + 1);
  for (let i = 0; i < 30; i++) {
    if (students.includes(allStudents[i])) {
      continue;
    }
    console.log(i + 1);
  }
}

solution(input);