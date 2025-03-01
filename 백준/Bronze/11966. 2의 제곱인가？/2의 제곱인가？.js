const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const N = Number(input);

const set = new Set();
for (let i = 0; i < 31; i++) {
  set.add(2 ** i);
}

if (set.has(N)) {
  console.log(1);
} else {
  console.log(0);
}
