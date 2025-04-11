const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M, R] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = [...Array(N + 1)].map(() => []);

arr.forEach(([u, v]) => {
  graph[u].push(v);
  graph[v].push(u);
});

//오름차순 정렬
graph.forEach((e) => e.sort((a, b) => b - a));

const visited = new Array(N + 1).fill(0);
let count = 1;

function bfs(node) {
  const queue = [];
  queue.push(node);
  visited[node] = count++;

  while (queue.length !== 0) {
    const cur = queue.shift();

    for (const next of graph[cur]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = count++;
      }
    }
  }
}

bfs(R);
const ans = [];
for (let i = 1; i <= N; i++) {
  ans.push(visited[i]);
}

console.log(ans.join("\n"));
