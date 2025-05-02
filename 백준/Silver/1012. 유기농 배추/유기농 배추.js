const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const T = +input[0];
let idx = 1;
const ans = [];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(" ").map(Number);
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    field[y][x] = 1;
  }

  let wormCount = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1 && !visited[y][x]) {
        bfs(x, y, field, visited, M, N);
        wormCount++;
      }
    }
  }

  ans.push(wormCount);
}

function bfs(x, y, field, visited, M, N) {
  const queue = [[x, y]];
  visited[y][x] = true;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        if (field[ny][nx] === 1 && !visited[ny][nx]) {
          visited[ny][nx] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

console.log(ans.join("\n"));
