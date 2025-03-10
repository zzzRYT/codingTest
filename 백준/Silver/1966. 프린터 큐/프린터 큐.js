const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.index = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.index !== 0) {
      this.rear.next = newNode;
      this.rear = newNode;
    } else {
      this.front = newNode;
      this.rear = newNode;
    }
    this.index++;
  }

  shift() {
    const temp = this.front;
    this.front = this.front.next;
    this.index--;
    return temp.data;
  }

  //큐 내에 현재 value보다 높은 우선순위를 가진 문서가 있는지 검사
  hasHigherPriority(value) {
    let current = this.front;
    while (current) {
      if (current.data.priority > value) return true;
      current = current.next;
    }
    return false;
  }
}

const count = Number(input.shift());
const ans = [];
for (let i = 0; i < count; i++) {
  const [N, M] = input.shift().trim().split(" ").map(Number);
  const priorities = input.shift().split(" ").map(Number);
  const queue = new Queue();

  for (let j = 0; j < N; j++) {
    queue.push({ priority: priorities[j], isTarget: j === M });
  }

  let printCount = 0;
  while (queue.index > 0) {
    const current = queue.shift();
    if (queue.hasHigherPriority(current.priority)) {
      queue.push(current);
    } else {
      printCount++;
      if (current.isTarget) {
        ans.push(printCount);
        break;
      }
    }
  }
}

console.log(ans.join("\n"));
