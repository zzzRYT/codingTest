const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(item) {
    this.arr.push(item);
    this.index++;
  }
  pop() {
    if (this.index <= 0) return -1;
    const temp = this.arr.pop();
    this.index--;
    return temp;
  }
  peek() {
    if (this.index <= 0) return -1;
    return this.arr[this.arr.length - 1];
  }
  size() {
    return this.index;
  }
  isEmpty() {
    return this.index <= 0 ? 1 : 0;
  }
}

const stack = new Stack();
const count = Number(input.shift());
let ans = "";
for (let i = 0; i < count; i++) {
  const temp = input[i].split(" ").map(Number);
  if (temp[0] === 1) stack.push(temp[1]);
  else if (temp[0] === 2) ans += `${stack.pop()}\n`;
  else if (temp[0] === 3) ans += `${stack.index}\n`;
  else if (temp[0] === 4) ans += `${stack.isEmpty()}\n`;
  else if (temp[0] === 5) ans += `${stack.peek()}\n`;
}

console.log(ans);
