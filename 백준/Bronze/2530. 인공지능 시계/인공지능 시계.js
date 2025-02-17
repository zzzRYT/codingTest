const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [now, timer] = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const [H, M, S] = now.split(" ").map(Number);

let timeH = Math.floor(Number(timer) / 3600);
let timeM = Math.floor(Number(timer % 3600) / 60);
let timeS = Number(timer) % 60;

let ansH = H + timeH;
let ansM = M + timeM;
let ansS = S + timeS;

if (ansS >= 60) {
  ansM = ansM + Math.floor(ansS / 60);
  ansS = ansS % 60;
}

if (ansM >= 60) {
  ansH = ansH + Math.floor(ansM / 60);
  ansM = ansM % 60;
}

if (ansH >= 24) {
  ansH = ansH % 24;
}

console.log(ansH, ansM, ansS);
