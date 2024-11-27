const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const n = Number(input[0]);
const NList = input[1].split(" ").map(Number);
let cardMap = new Map();
const MList = input[3].split(" ").map(Number);

for (let i = 0; i < NList.length; i++) {
  if (cardMap.has(NList[i])) cardMap.set(NList[i], cardMap.get(NList[i]) + 1);
  else cardMap.set(NList[i], 1);
}

const m = Number(input[2]);
let result = [];
for (let i = 0; i < MList.length; i++) {
  if (cardMap.has(MList[i])) {
    result.push(cardMap.get(MList[i]));
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));
