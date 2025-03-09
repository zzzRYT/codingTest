const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const N = Number(input.shift());
const ans = [];
for (let i = 0; i < N; i++) {
  const a = input.shift().split(" ").map(Number);
  const b = input.shift().split(" ").map(Number);

  const aIndex = a[0];
  const aArr = a.splice(1, aIndex).sort((a, b) => b - a);
  const bIndex = b[0];
  const bArr = b.splice(1, bIndex).sort((a, b) => b - a);
  const index = aIndex > bIndex ? aIndex : bIndex;
  ans.push(isSame(aArr, bArr, index));
}

console.log(ans.join("\n"));
function isSame(aArr, bArr, index) {
  const a = [...aArr];
  const b = [...bArr];

  for (let i = 0; i < index; i++) {
    if (a.length <= 0 || b.length <= 0) {
      if (a.length <= 0) return "B";
      if (b.length <= 0) return "A";
    }
    if (a[0] > b[0]) {
      return "A";
    } else if (a[0] < b[0]) {
      return "B";
    } else {
      a.shift();
      b.shift();
    }
  }
  return "D";
}
