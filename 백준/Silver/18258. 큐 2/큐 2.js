const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.index = 0;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.tail;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.index++;
  }

  dequeue() {
    if (this.index > 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.index--;
      return item;
    } else if (this.index === 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.index--;
      return item;
    } else if (this.index === 1) {
      const item = this.head.item;
      this.head = null;
      this.tail = null;
      this.index--;
      return item;
    } else {
      return -1;
    }
  }

  empty() {
    return this.index ? 0 : 1;
  }

  front() {
    return this.head ? this.head.item : -1;
  }

  rear() {
    return this.tail ? this.tail.item : -1;
  }
}

const count = Number(input.shift());
const queue = new Queue();
const ans = [];
for (let i = 0; i < count; i++) {
  const method = input[i].trim().split(" ");
  switch (method[0]) {
    case "push":
      queue.enqueue(method[1]);
      break;
    case "pop":
      ans.push(queue.dequeue());
      break;
    case "size":
      ans.push(queue.index);
      break;
    case "empty":
      ans.push(queue.empty());
      break;
    case "front":
      ans.push(queue.front());
      break;
    case "back":
      ans.push(queue.rear());
      break;
  }
}
console.log(ans.join("\n"));
