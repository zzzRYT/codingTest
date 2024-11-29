const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim();
const set = new Set();

for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j < input.length - i + 1; j++) {
    set.add(input.slice(j, j + i));
  }
}

console.log(set.size);
