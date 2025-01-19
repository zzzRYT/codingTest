const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const count = Number(input);
let cuteBabyLeaf = "SciComLove";

for (let i = 0; i < count; i++) {
  const firstWord = cuteBabyLeaf[0];
  cuteBabyLeaf = cuteBabyLeaf.slice(1, cuteBabyLeaf.length);
  cuteBabyLeaf = cuteBabyLeaf + firstWord;
}

console.log(cuteBabyLeaf);
