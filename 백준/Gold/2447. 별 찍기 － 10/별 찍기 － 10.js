const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const N = +input;

const graph = Array.from({ length: N }, () => new Array(N).fill("*"));

function drawStar(x, y, size) {
  if (size === 3) {
    graph[x + 1][y + 1] = " ";
    return;
  }

  const next = size / 3;
  for (let dx = 0; dx < 3; dx++) {
    for (let dy = 0; dy < 3; dy++) {
      if (dx === 1 && dy === 1) {
        for (let i = x + next; i < x + next * 2; i++) {
          for (let j = y + next; j < y + next * 2; j++) {
            graph[i][j] = " ";
          }
        }
      } else {
        drawStar(x + dx * next, y + dy * next, next);
      }
    }
  }
}

drawStar(0, 0, N);
console.log(graph.map((ele) => ele.join("")).join("\n"));
