const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());

class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  push(data) {
    this.queue[this.size++] = data;
  }

  pop() {
    if (this.size) {
      const deleteEle = this.queue[0];
      const filterDeleteEle = this.queue.slice(1, this.size + 1);
      this.queue = filterDeleteEle;
      this.size--;
      return deleteEle;
    } else {
      return -1;
    }
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  front() {
    if (this.size) {
      return this.queue[0];
    } else {
      return -1;
    }
  }

  back() {
    if (this.size) {
      return this.queue[this.size - 1];
    } else {
      return -1;
    }
  }
}

const queue = new Queue();
const ans = [];

for (let i = 0; i < count; i++) {
  const temp = input.shift().trim().split(" ");
  switch (temp[0]) {
    case "push":
      queue.push(temp[1]);
      break;
    case "pop":
      ans.push(queue.pop());
      break;
    case "size":
      ans.push(queue.size);
      break;
    case "empty":
      ans.push(queue.isEmpty());
      break;
    case "front":
      ans.push(queue.front());
      break;
    case "back":
      ans.push(queue.back());
  }
}

console.log(ans.join("\n"));
