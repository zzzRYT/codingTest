const fs = require("fs");
const [NM, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const baskets = Array.from({ length: NM[0] }, (_, i) => i + 1);
for (let i = 0; i < NM[1]; i++) {
  let startIdx = input[i][0] - 1;
  let lastIdx = input[i][1] - 1;
  while (startIdx < lastIdx) {
    [baskets[startIdx], baskets[lastIdx]] = [
      baskets[lastIdx],
      baskets[startIdx],
    ];
    startIdx++;
    lastIdx--;
  }
}
console.log(baskets.join(" "));
