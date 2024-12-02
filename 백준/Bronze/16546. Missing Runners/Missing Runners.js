const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const N = input.shift();
const arr = input[0].split(" ").map(Number);
const set = new Set(arr);

for (let i = 1; i <= N; i++) {
  if (!set.has(i)) return console.log(i);
}
