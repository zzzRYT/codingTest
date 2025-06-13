const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const set = new Set([...arr]);
const ans = [];

for (let item of set) {
  ans.push(item);
}

ans.sort((a, b) => a - b);
console.log(ans.join(" "));
