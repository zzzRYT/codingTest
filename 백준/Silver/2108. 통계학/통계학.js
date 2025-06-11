const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n").map(Number);

const N = +input[0];
const arr = input.slice(1);

function mathAverage(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return Math.round(sum / N);
}

function medianValue(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[Math.floor(N / 2)];
}

function frequencyNumber(arr) {
  const map = new Map();
  arr.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  const freqArr = Array.from(map.entries());
  freqArr.sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  if (freqArr.length > 1 && freqArr[0][1] === freqArr[1][1]) {
    return freqArr[1][0];
  }

  return freqArr[0][0];
}

function range(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[N - 1] - sorted[0];
}

const ans = [];

ans.push(mathAverage(arr));
ans.push(medianValue(arr));
ans.push(frequencyNumber(arr));
ans.push(range(arr));

console.log(ans.join("\n"));
