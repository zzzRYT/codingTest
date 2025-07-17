const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

let time = parseInt(input);
let A = 0;
let B = 0;
let C = 0;
if (time >= 300) {
  A = Math.floor(time / 300);
  time = time % 300;
}
if (time >= 60 && time < 300) {
  B = Math.floor(time / 60);
  time = time % 60;
}
if (time >= 10 && time < 60) {
  C = Math.floor(time / 10);
  time = time % 10;
}
if (time !== 0) {
  console.log(-1);
} else {
  console.log(`${A} ${B} ${C}`);
}
