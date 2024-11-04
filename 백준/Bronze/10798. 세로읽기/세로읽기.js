//여러 줄 입력
let fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((ele) => ele.trim().split(""));

const width = getWidth(input);
const newArr = fullArr(input, width);
let result = "";
for (let i = 0; i < width; i++) {
  for (let j = 0; j < 5; j++) {
    if (newArr[j][i] === "@") continue;
    result += newArr[j][i];
  }
}
console.log(result);

function getWidth(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const length = arr[i].length;
    if (length > max) {
      max = length;
    }
  }
  return max;
}

function fullArr(arr, width) {
  for (let i = 0; i < 5; i++) {
    if (arr[i].length < width) {
      for (let j = arr[i].length; j < width; j++) {
        arr[i].push("@");
      }
    }
  }
  return arr;
}
