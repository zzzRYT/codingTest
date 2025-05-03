const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((line) => line.split(" ").map(Number));
const queue = [];
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// 초기 익은 토마토 좌표를 큐에 담기
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (graph[y][x] === 1) {
      queue.push([y, x]);
    }
  }
}

let idx = 0;
while (idx < queue.length) {
  const [y, x] = queue[idx++];
  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];
    if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
      if (graph[ny][nx] === 0) {
        graph[ny][nx] = graph[y][x] + 1; // 익은 날짜를 +1 씩 누적
        queue.push([ny, nx]);
      }
    }
  }
}

let max = 0;
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (graph[y][x] === 0) {
      console.log(-1); // 익지 못한 토마토 존재
      return;
    }
    max = Math.max(max, graph[y][x]);
  }
}

console.log(max - 1); // 처음 익은 날이 1이므로 -1
