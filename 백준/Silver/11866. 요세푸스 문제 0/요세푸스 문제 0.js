const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ")
  .map(Number);

//현재 위치
//최종 위치 다음은 다시 처음 위치

const [N, K] = input;

// 초기 배열 생성 (1부터 N까지)
const arr = Array.from({ length: N }, (_, i) => i + 1);
const ans = [];
let idx = 0;

while (arr.length > 0) {
  idx = (idx + K - 1) % arr.length; // K번째 사람의 인덱스 계산
  ans.push(arr.splice(idx, 1)[0]); // 제거하고 결과에 추가
}

console.log(`<${ans.join(", ")}>`);
