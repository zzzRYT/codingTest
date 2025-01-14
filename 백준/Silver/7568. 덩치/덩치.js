const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());

const bigList = [];
const ans = [];
for (let i = 0; i < count; i++) {
  const temp = input.shift().split(" ").map(Number);
  bigList.push(temp);
}

for (let i = 0; i < count; i++) {
  let biggerThenMe = 0;
  for (let j = 0; j < count; j++) {
    if (bigList[i][0] < bigList[j][0] && bigList[i][1] < bigList[j][1]) {
      biggerThenMe++;
    }
  }
  ans.push(biggerThenMe + 1);
}

console.log(ans.join(" "));
