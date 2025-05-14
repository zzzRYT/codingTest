const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString();

const arr = input.split("").map(Number);
const set = Array(10).fill(0);
let count = 0;

for (let i = 0; i < arr.length; i++) {
  const current = arr[i];
  if (current === 6 || current === 9) {
    if (current === 6 && set[9] < count) {
      set[9] += 1;
    } else if (current === 9 && set[6] < count) {
      set[6] += 1;
    } else {
      set[current] += 1;
      count++;
    }
  } else {
    set[current] += 1;
  }
}

console.log(Math.max(...set));
