const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const N = +input[0];
const requests = input[1].split(" ").map(Number);
const M = +input[2];

let left = 0;
let right = Math.max(...requests);
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  // 이 limit(mid)로 예산 배정했을 때 총합 계산
  const total = requests.reduce((sum, req) => sum + Math.min(req, mid), 0);

  if (total <= M) {
    // 예산 초과 안함 → 더 큰 상한값도 가능한지 보기
    answer = mid; // 일단 저장해두기
    left = mid + 1;
  } else {
    // 예산 초과 → 상한값 줄여야 함
    right = mid - 1;
  }
}

console.log(answer);
