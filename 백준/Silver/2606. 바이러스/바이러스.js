const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

const graph = [...Array(N + 1)].map(() => []);
const arr = [];

for (let i = 2; i <= M + 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const visited = new Set();

function dfs(startNode) {
  const queue = [];
  queue.push(startNode);
  while (queue.length > 0) {
    const shift = queue.shift();

    for (let node of graph[shift]) {
      if (!visited.has(node)) {
        queue.push(node);
        visited.add(node);
      }
    }
  }
}
dfs(1);

if (visited.size <= 0) {
  console.log(0);
} else {
  console.log(visited.size - 1);
}
