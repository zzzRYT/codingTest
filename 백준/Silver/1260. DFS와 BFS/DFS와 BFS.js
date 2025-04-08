const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = [...Array(N + 1)].map(() => []);

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.map((v) => v.sort((a, b) => a - b));

const dfs = (startNode) => {
  const visited = new Set();
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.has(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.add(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

const bfs = (startNode) => {
  let visited = new Set(); // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
    if (!visited.has(node)) {
      // 해당 노드 방문이 처음이라면,
      visited.add(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};
const ans1 = [];
const ans2 = [];

dfs(V).forEach((ele) => {
  ans1.push(ele);
});
bfs(V).forEach((ele) => {
  ans2.push(ele);
});

console.log(ans1.join(" ") + "\n" + ans2.join(" "));
