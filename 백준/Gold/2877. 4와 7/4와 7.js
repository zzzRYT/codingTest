const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "LJJ/baekjoon/input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().toString();

let K = BigInt(input);

let length = 1n;
let count = 2n;
let total = 0n;

while (K > total + count) {
  total += count;
  length++;
  count = 1n << length; // 2^length
}

// 2. 그 자리수에서 몇 번째인지 (0-based index)
let offset = K - total - 1n;

// 3. offset을 이진수로 변환 후 4/7 매핑
let binary = offset.toString(2).padStart(Number(length), "0");

let result = binary
  .split("")
  .map((ch) => (ch === "0" ? "4" : "7"))
  .join("");

console.log(result);