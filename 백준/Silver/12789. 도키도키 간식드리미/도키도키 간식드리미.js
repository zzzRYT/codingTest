const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");
const count = Number(input.shift());
const arr = input[0].split(" ").map(Number);

let state = 1;
const stack = [];
while (state <= count) {
  if (arr[0] === state) {
    arr.shift();
    state++;
  } else {
    if (stack[stack.length - 1] === state) {
      stack.pop();
      state++;
    } else {
      if (arr.length === 0) break;
      const temp = arr.shift();
      stack.push(temp);
    }
  }
}

console.log(stack.length !== 0 ? "Sad" : "Nice");
