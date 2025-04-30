const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((line) => line.split("").map(Number));

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(value) {
    this.storage[this.rear++] = value;
  }

  dequeue() {
    const value = this.storage[this.front];
    delete this.storage[this.front++];
    return value;
  }
}

function bfs(x, y) {
  const queue = new Queue();
  queue.enqueue([x, y]);

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.size() > 0) {
    const [curX, curY] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        if (graph[nx][ny] === 1) {
          graph[nx][ny] = graph[curX][curY] + 1;
          queue.enqueue([nx, ny]);
        }
      }
    }
  }

  return graph[N - 1][M - 1];
}

console.log(bfs(0, 0));
