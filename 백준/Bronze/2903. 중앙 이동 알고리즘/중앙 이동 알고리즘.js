//여러 줄 입력
let fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();

let width = 2;
let increase = 1;
let count = 1;
while (count <= input) {
  width += increase;
  increase *= 2;
  count++;
}

console.log(width * width);
