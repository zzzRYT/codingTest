const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, input] = fs.readFileSync(filePath, "utf8").trim().split("\n");

const arr = input.split(" ").map(Number);

// 1. 중복 제거 및 정렬
const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);

// 2. 각 값의 압축된 좌표를 매핑
const valueToCompressed = new Map();
uniqueSorted.forEach((value, index) => {
  valueToCompressed.set(value, index);
});

// 3. 원래 배열을 순회하며 압축된 좌표 생성
const result = arr.map((value) => valueToCompressed.get(value));

// 4. 결과 출력
console.log(result.join(" "));
