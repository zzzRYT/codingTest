const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

input.pop();
const ans = [];
for (let i = 0; i < input.length; i++) {
  let count = 2;
  const numbers = input[i].split("");
  count+=numbers.length-1;
  for (let j = 0; j < numbers.length; j++) {
    if(numbers[j] === '0') {
      count+=4;
    } else if(numbers[j] === '1') {
      count+=2;
    } else {
      count+=3;
    }
  }
  ans.push(count)
}

console.log(ans.join("\n"))