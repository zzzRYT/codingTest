const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const phoneNum1 = input[0].split("").map(Number);
const phoneNum2 = input[1].split("").map(Number);

const combinePhone = combineNum(phoneNum1, phoneNum2);
const ans = compatibility(combinePhone);
console.log(ans.join(""));

function combineNum(pNum1, pNum2) {
  const newArr = [];
  for (let i = 0; i < pNum1.length; i++) {
    newArr.push(pNum1[i]);
    newArr.push(pNum2[i]);
  }
  return newArr;
}

function compatibility(arr) {
  const newArr = [];
  if (arr.length <= 2) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    const temp = (arr[i] + arr[i + 1]) % 10;
    newArr.push(temp);
  }
  newArr.pop();
  return compatibility(newArr);
}
