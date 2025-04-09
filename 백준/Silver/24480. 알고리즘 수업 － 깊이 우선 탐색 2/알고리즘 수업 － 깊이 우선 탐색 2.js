const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M, R] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = [...Array(N + 1)].map(() => []);

// 그래프 구성
arr.forEach(([u, v]) => {
  graph[u].push(v);
  graph[v].push(u);
});

graph.forEach((edges) => edges.sort((a, b) => b - a));

const visited = new Array(N + 1).fill(0);
let count = 1;

function dfs(node) {
  visited[node] = count++;
  for (let next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

dfs(R);
const ans = [];

for (let i = 1; i <= N; i++) {
  ans.push(visited[i]);
}
console.log(ans.join("\n"));
