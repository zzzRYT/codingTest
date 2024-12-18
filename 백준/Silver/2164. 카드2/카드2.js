const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

class Queue {
  constructor() {
    this.storage = new Object();
    this.front = 0;
    this.rear = 0;
  }

  get size() {
    return this.rear - this.front;
  }

  enqueue(item) {
    this.storage[this.rear] = item;
    this.rear++;
  }
  dequeue() {
    const removeItem = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }
    return removeItem;
  }
}

const queue = new Queue();
for (let i = 1; i <= Number(input); i++) {
  queue.enqueue(i);
}

while (queue.size > 1) {
  queue.dequeue();
  const temp = queue.dequeue();
  queue.enqueue(temp);
}

console.log(queue.storage["0"]);
