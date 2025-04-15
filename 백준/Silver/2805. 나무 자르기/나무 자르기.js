const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function binarySearch(arr, target) {
  let low = 0;
  let high = Math.max(...arr);

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (arr[i] > mid) {
        sum += arr[i] - mid;
      }
    }
    if (sum === target) return mid;
    if (sum > target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}

console.log(binarySearch(arr, M));
