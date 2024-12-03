const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").toString().trim().split("");

//고려사항
//현재 위치에 대한 정보
//65 -> 90, 90 -> 65가 될 때 의 값을 전환할 수 있어야 함
const arr = ["A", ...input];

let time = 0;
for (let i = 0; i < arr.length - 1; i++) {
  const now = arr[i].charCodeAt(0);
  const next = arr[i + 1].charCodeAt(0);
  //역순
  const fc = Math.abs(now - next);
  time += Math.min(fc, 26 - fc);
}

console.log(time);
