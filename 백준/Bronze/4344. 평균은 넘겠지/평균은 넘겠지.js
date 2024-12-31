const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n");

const C = Number(input.shift());
const ans = [];
for (let i = 0; i < C; i++) {
  let p = 0; //평균을 넘는 사람 수
  const arr = input[i].split(" ").map(Number);
  const count = arr.shift();
  let sum = 0;
  for (let j = 0; j < count; j++) {
    sum += arr[j];
  }
  const avg = sum / count;
  for (let j = 0; j < count; j++) {
    if (arr[j] > avg) p++;
  }
  ans.push((100 - ((count - p) / count) * 100).toFixed(3) + "%");
}

console.log(ans.join("\n"));
