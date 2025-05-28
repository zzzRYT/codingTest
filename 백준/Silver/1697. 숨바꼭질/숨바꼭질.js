const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, K] = fs
  .readFileSync(filePath, "utf8")
  .trim()
  .toString()
  .split(" ")
  .map(Number);

const visited = Array(100001).fill(false);
const time = Array(100001).fill(0);

function bfs(N) {
  const queue = [];
  queue.push(N);
  visited[N] = true;

  while (queue.length > 0) {
    const value = queue.shift();
    if (value === K) {
      console.log(time[value]);
      return;
    }

    for (let next of [value - 1, value + 1, value * 2]) {
      if (next >= 0 && next <= 100000 && !visited[next]) {
        queue.push(next);
        visited[next] = true;
        time[next] = time[value] + 1;
      }
    }
  }
}

bfs(N);
