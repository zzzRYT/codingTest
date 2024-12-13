const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

/**
 * S : 초기배열 최대크기
 * N : 추가 개수
 * M : 삭제 개수
 */
const [S0, N, M] = input.shift().split(" ").map(Number);
const commands = input.map(Number);

let S = S0; // 현재 배열 최대 크기
let U = 0; // 현재 배열 사용 중인 크기
let maxS = S0; // 최대 배열 크기

for (let i = 0; i < commands.length; i++) {
  if (commands[i] === 1) {
    U++; // 원소 추가
    if (U > S) {
      // 배열 크기가 부족하면 크기 늘리기
      S *= 2;
      maxS = Math.max(maxS, S);
    }
  } else if (commands[i] === 0) {
    U--; // 원소 삭제
  }
}

console.log(maxS);
