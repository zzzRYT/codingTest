const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const paper = input.slice(1).map((line) => line.split(" ").map(Number));
let white = 0;
let blue = 0;

function countColor(x, y, size) {
  const color = paper[x][y];
  let isSame = true;

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== color) {
        isSame = false;
        break;
      }
    }
    if (!isSame) break;
  }

  if (isSame) {
    if (color === 0) white++;
    else blue++;
    return;
  }

  const newSize = size / 2;
  countColor(x, y, newSize); // 제 2사분면
  countColor(x, y + newSize, newSize); // 제 1사분면
  countColor(x + newSize, y, newSize); // 제 3사분면
  countColor(x + newSize, y + newSize, newSize); // 제 4사분면
}

countColor(0, 0, N);
console.log(white);
console.log(blue);
