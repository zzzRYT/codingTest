const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n").map(Number);

function findDwarves(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const filtered = arr.filter((_, idx) => idx !== i && idx !== j);
      const sum = filtered.reduce((acc, val) => acc + val, 0);
      if (sum === 100) {
        return filtered;
      }
    }
  }
  return [];
}

const ans = [];

const result = findDwarves(input);
result.sort((a, b) => a - b);
result.forEach((height) => ans.push(height));

console.log(ans.join("\n"));
