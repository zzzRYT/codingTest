const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath, "utf8")
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const N = input[0][0];
const NList = input[1];
const M = input[2][0];
const MList = input[3];

const obj = {};
for (let i = 0; i < N; i++) {
  if (obj[NList[i]]) {
    obj[NList[i]] += 1;
  } else {
    obj[NList[i]] = 1;
  }
}

let result = [];
for (let i = 0; i < M; i++) {
  if (!obj[MList[i]]) {
    result.push(0);
  } else {
    result.push(obj[MList[i]]);
  }
}

console.log(result.join(" "));
