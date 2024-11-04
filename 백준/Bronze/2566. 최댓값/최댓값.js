//여러 줄 입력
let fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

let max = 0;
let column = 0;
let row = 0;

for (let i = 0; i < input.length; i++) {
  let [tempMax, tempRow] = maxNumber(input[i]);
  if (max < tempMax) {
    max = tempMax;
    column = i;
    row = tempRow;
  }
}
console.log(max);
console.log(column + 1, row + 1);

function maxNumber(arr) {
  let max = 0;
  let row = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      row = i;
    }
  }
  return [max, row];
}
