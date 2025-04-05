const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split(" ");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(data, last) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      if (data === last) {
        this.tail.next = this.head;
      }
    }
    this.size++;
  }

  remove(index) {
    const result = [];
    let cur = this.head;
    let prev = this.tail;
    while (this.size > 0) {
      for (let i = 1; i < index; i++) {
        prev = cur;
        cur = cur.next;
      }
      result.push(cur.data);
      prev.next = cur.next;

      if (cur === this.head) {
        this.head = cur.next;
      }
      if (cur === this.tail) {
        this.tail = prev;
      }

      cur = cur.next;
      this.size--;
    }
    return result;
  }
}

const [N, K] = input.map(Number);

const linkedList = new LinkedList();

for (let i = 1; i <= N; i++) {
  linkedList.insert(i, N);
}
const temp = linkedList.remove(K);

console.log(`<${temp.join(", ")}>`);
