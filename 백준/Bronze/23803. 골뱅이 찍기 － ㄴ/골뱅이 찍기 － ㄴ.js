const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();
const count = Number(input);

const arr = Array.from(Array(count * 5), () => new Array(count * 5).fill(""));

for (let i = 0; i < arr.length - count; i++) {
  for (let j = count - 1; j >= 0; j--) {
    arr[i][j] = "@";
  }
}
for (let i = arr.length - count; i < arr.length; i++) {
  arr[i].fill("@");
}

console.log(arr.map((e) => e.join("")).join("\n"));
