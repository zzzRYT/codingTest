const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

class Deque {
  constructor() {
    this.arr = new Array(2000000);
    this.head = 1000000;
    this.tail = 1000000;
  }
  pushFront(item) {
    this.arr[--this.head] = item;
  }
  pushBack(item) {
    this.arr[this.tail++] = item;
  }
  popFront() {
    if (this.isEmpty) return -1;
    return this.arr[this.head++];
  }
  popBack() {
    if (this.isEmpty) return -1;
    return this.arr[--this.tail];
  }
  printFront() {
    if (this.isEmpty) return -1;
    return this.arr[this.head];
  }
  printBack() {
    if (this.isEmpty) return -1;
    return this.arr[this.tail - 1];
  }
  get size() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.size === 0 ? 1 : 0;
  }
}

const count = Number(input.shift());
const deque = new Deque();

const ans = [];
for (let i = 0; i < count; i++) {
  const now = input[i].split(" ");
  const command = Number(now[0]);
  const value = now.length > 1 ? Number(now[1]) : undefined;
  const result = executeCommand(command, value);
  if (result !== undefined) ans.push(result);
}
console.log(ans.join("\n"));

function executeCommand(command, value) {
  switch (command) {
    case 1:
      deque.pushFront(value);
      break;
    case 2:
      deque.pushBack(value);
      break;
    case 3:
      return deque.popFront();
    case 4:
      return deque.popBack();
    case 5:
      return deque.size;
    case 6:
      return deque.isEmpty;
    case 7:
      return deque.printFront();
    case 8:
      return deque.printBack();
  }
}
