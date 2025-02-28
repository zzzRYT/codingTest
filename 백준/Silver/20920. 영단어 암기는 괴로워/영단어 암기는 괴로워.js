const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = new Map();

for (let i = 0; i < N; i++) {
  const cur = input[i].trim();
  if (cur.length < M) continue;
  if (map.has(cur)) {
    map.set(cur, map.get(cur) + 1);
  } else {
    map.set(cur, 1);
  }
}

const sortMap = map.keys();
const ans = [...sortMap].sort((a, b) => {
  const freqDiff = map.get(b) - map.get(a);
  if (freqDiff !== 0) return freqDiff;

  const lenDiff = b.length - a.length;
  if (lenDiff !== 0) return lenDiff;
  return a.localeCompare(b);
});
console.log(ans.join("\n"));
