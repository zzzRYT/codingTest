const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let count = 0;
while (input[count] != -1) {
  const nowNum = Number(input[count]);
  const tempArr = getDivisor(nowNum);
  const tempSum = sum(tempArr);
  if (tempSum === nowNum) {
    console.log(`${nowNum} = ${tempArr.join(" + ")}`);
  } else {
    console.log(`${nowNum} is NOT perfect.`);
  }
  count++;
}

function getDivisor(number) {
  const result = [];
  for (let i = 0; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      result.push(i);
      if (i !== number / i) result.push(number / i);
    }
  }
  result.sort((a, b) => a - b);
  result.pop();
  return result;
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function getSumLetter(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {}
}
