const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = Number(input.shift());
const graph = [...input.map((v) => v.trim().split("").map(Number))];
const visited = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
const ans = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y, count) {
  const queue = [];
  queue.push([x, y]);
  visited[x][y] = true;

  while (queue.length > 0) {
    const [tx, ty] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = tx + dx[i];
      const ny = ty + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
        continue;
      }

      if (!visited[nx][ny] && graph[nx][ny] === 1) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
        count++;
      }
    }
  }
  ans.push(count);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      bfs(i, j, 1);
    }
  }
}

console.log(ans.length + "\n" + ans.sort((a, b) => a - b).join("\n"));
