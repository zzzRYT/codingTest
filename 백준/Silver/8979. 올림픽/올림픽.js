const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const countries = input.slice(1).map((line) => line.split(" ").map(Number));

countries.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  if (a[2] !== b[2]) return b[2] - a[2];
  return b[3] - a[3];
});

let rank = 1;
let result = 1;
for (let i = 0; i < N; i++) {
  const [num, gold, silver, bronze] = countries[i];

  if (i > 0) {
    const [_, pg, ps, pb] = countries[i - 1];
    if (gold !== pg || silver !== ps || bronze !== pb) {
      rank = i + 1;
    }
  }

  if (num === K) {
    result = rank;
    break;
  }
}

console.log(result);
