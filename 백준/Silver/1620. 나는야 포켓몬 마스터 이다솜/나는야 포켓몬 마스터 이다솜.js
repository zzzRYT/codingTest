const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath, "utf8")
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const NM = input.shift();
const N = NM[0];
const M = NM[1];

const question = [];
const result = [];
for (let i = 0; i < M; i++) {
  const temp = input.pop();
  question.push(temp);
}

const mapString = new Map();
const mapNumber = new Map();
for (let i = 0; i < N; i++) {
  mapString.set(input[i][0], i + 1);
  mapNumber.set(i + 1, input[i][0]);
}

question.reverse().map((ele) => {
  if (!isNaN(ele[0])) {
    result.push(mapNumber.get(Number(ele[0])));
  } else {
    result.push(mapString.get(ele[0]));
  }
});

console.log(result.join("\n"));
