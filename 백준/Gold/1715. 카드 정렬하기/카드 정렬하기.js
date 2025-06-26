const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIdx]) {
        this.swap(index, parentIdx);
        index = parentIdx;
      } else break;
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;
      let smallest = index;

      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
        smallest = leftIdx;
      }

      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
        smallest = rightIdx;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else break;
    }
  }
}

const N = +input[0];
const arr = input.slice(1).map(Number);

const minHeap = new MinHeap();

for (let i = 0; i < N; i++) {
  minHeap.insert(arr[i]);
}

let total = 0;
while (minHeap.size() > 1) {
  const first = minHeap.remove();
  const second = minHeap.remove();
  const sum = first + second;
  total += sum;
  minHeap.insert(sum);
}

console.log(total);
