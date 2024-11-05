//여러 줄 입력
let fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();

let count = 1;
let state = 1;
let jump = 6;
while (input > state) {
  count++;
  state += jump;
  jump += 6;
}

console.log(count);
