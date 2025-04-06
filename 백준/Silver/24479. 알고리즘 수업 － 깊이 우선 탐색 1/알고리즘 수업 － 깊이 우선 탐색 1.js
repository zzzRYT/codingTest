const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M, R] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = [...Array(N + 1)].map(() => []);
const visited = Array(N).fill(0);
let cnt = 1;

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.map((v) => v.sort((a, b) => a - b));

// DFS
const dfs = (node) => {
  if (!visited[node - 1]) {
    visited[node - 1] = cnt;
    cnt++;
    for (const next of graph[node]) dfs(next);
  }
};

dfs(R);

console.log(visited.join("\n"));
