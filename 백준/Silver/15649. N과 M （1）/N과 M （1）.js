const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, M] = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split(" ")
  .map(Number);

const arr = Array.from({ length: N }, (_, idx) => idx);
const visit = Array(M).fill(false);
const temp = [];

const ans = [];
dfs(N, M, 0);
console.log(ans.join("\n"));

//dep가 하나씩 증가하면서 재귀를 돌려야 함
function dfs(N, M, dep) {
  if (dep === M) {
    ans.push(temp.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visit[i]) {
      visit[i] = true;
      temp.push(i);
      dfs(N, M, dep + 1);
      visit[i] = false;
      temp.pop();
    }
  }
}
