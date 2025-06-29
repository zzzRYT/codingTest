const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString();

const N = +input;

let count = 0;

for (let i = 1; i <= N; i++) {
  if (isEquidistantSequence(i)) {
    count++;
  }
}

console.log(count);

function isEquidistantSequence(num) {
  const arr = num.toString().split("").map(Number);
  if (arr.length === 1 || arr.length === 2) {
    return true;
  }
  let gap = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    const temp = arr[i + 1] - arr[i];
    if (gap !== temp) {
      return false;
    }
  }
  return true;
}
