const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let d = Number(input[3]);
let e = Number(input[4]);
let f = Number(input[5]);

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    a * x + b * y === c && d * x + e * y === f ? console.log(x, y) : null;
  }
}
