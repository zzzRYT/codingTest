const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().toString().split("\n");

function binarySearch(arr, searchNum) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((end + start) / 2);

  while (start <= end) {
    if (arr[mid] === searchNum) {
      return 1;
    }

    if (arr[mid] < searchNum) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((end + start) / 2);
  }
  return 0;
}

const T = +input[0];
const ans = [];

for (let i = 1; i <= T * 4; i += 4) {
  const N = +input[i];
  const scheduler1 = input[i + 1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const M = +input[i + 2];
  const scheduler2 = input[i + 3].split(" ").map(Number);

  for (let j = 0; j < M; j++) {
    const temp = binarySearch(scheduler1, scheduler2[j]);
    ans.push(temp);
  }
}

console.log(ans.join("\n"));
