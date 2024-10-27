let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

function solution(number, binary) {
  const arr = number.split("").reverse();
  const base = Number(binary);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "A" && arr[i] <= "Z") {
      arr[i] = arr[i].charCodeAt(0) - 55;
      result += arr[i] * Math.pow(base, i);
    } else {
      arr[i] = Number(arr[i]);
      result += arr[i] * Math.pow(base, i);
    }
  }

  console.log(result);
}

solution(input[0], input[1]);
