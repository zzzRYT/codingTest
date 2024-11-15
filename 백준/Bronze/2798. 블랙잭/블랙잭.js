const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [NM, c] = fs.readFileSync(filePath).toString().trim().split("\n");

let NMArray = NM.trim().split(" ");

let cardCount = Number(NMArray[0]);
let M = Number(NMArray[1]);

const cards = c
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => b - a);

let max = 0;
for (let i = 0; i < cardCount; i++) {
  for (let j = i + 1; j < cardCount; j++) {
    for (let k = j + 1; k < cardCount; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum > M) continue;
      if (max < sum) {
        max = sum;
      }
    }
  }
}

console.log(max);
