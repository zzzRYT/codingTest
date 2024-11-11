const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let x = Number(input[0]),
  y = Number(input[1]),
  w = Number(input[2]),
  h = Number(input[3]);

const result = [x, y];
result.push(w - x);
result.push(h - y);

let min = 1000;
for (let i = 0; i < result.length; i++) {
  if (min > result[i]) {
    min = result[i];
  }
}
console.log(min);
