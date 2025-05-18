const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let maxSafe = 0;

const simulation = () => {
  const lab = arr.map((row) => row.slice());
  const queue = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        if (lab[nx][ny] === 0) {
          lab[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
  }
  let safePlace = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 0) {
        safePlace++;
      }
    }
  }
  maxSafe = Math.max(maxSafe, safePlace);
};

const combinationDFS = (count) => {
  if (count === 3) {
    simulation();
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0) {
        arr[i][j] = 1;
        combinationDFS(count + 1);
        arr[i][j] = 0;
      }
    }
  }
};
combinationDFS(0);
console.log(maxSafe);
