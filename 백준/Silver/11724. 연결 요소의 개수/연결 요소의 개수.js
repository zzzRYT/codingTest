const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input.slice(1).map((line) => line.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function bfs(startNode) {
  let queue = [];
  queue.push(startNode);

  while (queue.length > 0) {
    const value = queue.shift();

    for (const neighbor of graph[value]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
  return visited;
}

let ans = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    ans++;
  }
}

console.log(ans);
