const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, M] = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ")
  .map(Number);

const temp = [];
const ans = [];
dfs(N, M, 0, 0);
console.log(ans.join("\n"));

function dfs(N, M, depth, start) {
  if (depth === M) {
    ans.push(temp.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (i >= start) {
      temp.push(i + 1);
      dfs(N, M, depth + 1, i);
      temp.pop();
    }
  }
}
