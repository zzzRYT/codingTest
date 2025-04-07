const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DeQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push_front(data) {
    let cur = this.head;
    const newNode = new Node(data);
    if (this.head) {
      cur.prev = newNode;
      this.head = newNode;
      this.head.next = cur;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  push_back(data) {
    const newNode = new Node(data);
    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop_front() {
    let cur = this.head;
    if (!this.head) {
      return -1;
    } else {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      this.size--;
      if (this.size <= 0) {
        this.tail = null;
      }
      return cur.data;
    }
  }

  pop_back() {
    let cur = this.tail;
    if (!this.tail) {
      return -1;
    } else {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      this.size--;
      if (this.size <= 0) {
        this.head = null;
      }
      return cur.data;
    }
  }

  isEmpty() {
    if (this.size > 0) {
      return 0;
    } else {
      return 1;
    }
  }

  print_front() {
    if (!this.head) {
      return -1;
    }
    return this.head.data;
  }

  print_back() {
    if (!this.tail) {
      return -1;
    }
    return this.tail.data;
  }
}

const count = Number(input[0]);
const dequeue = new DeQueue();

const ans = [];

for (let i = 1; i <= count; i++) {
  const [order, value] = input[i].trim().split(" ");

  switch (order) {
    case "push_back":
      dequeue.push_back(Number(value));
      break;
    case "push_front":
      dequeue.push_front(Number(value));
      break;
    case "pop_back":
      ans.push(dequeue.pop_back());
      break;
    case "pop_front":
      ans.push(dequeue.pop_front());
      break;
    case "back":
      ans.push(dequeue.print_back());
      break;
    case "front":
      ans.push(dequeue.print_front());
      break;
    case "size":
      ans.push(dequeue.size);
      break;
    case "empty":
      ans.push(dequeue.isEmpty());
      break;
  }
}

console.log(ans.join("\n"));
