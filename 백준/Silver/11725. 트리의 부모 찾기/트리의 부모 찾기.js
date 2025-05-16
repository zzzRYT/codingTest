const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = +input[0];
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

arr.forEach(([to, from]) => {
  graph[to].push(from);
  graph[from].push(to);
});

const parent = Array(N + 1).fill(0);
const visited = Array(N + 1).fill(false);

const queue = [1];
visited[1] = true;

while (queue.length > 0) {
  const cur = queue.shift();

  for (const next of graph[cur]) {
    if (!visited[next]) {
      visited[next] = true;
      parent[next] = cur;
      queue.push(next);
    }
  }
}

const ans = [];

for (let i = 2; i <= N; i++) {
  ans.push(parent[i]);
}
console.log(ans.join("\n"));
