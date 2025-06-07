const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
const x = +input[2];

//병합 정렬
function mergeSort(arr, n) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.ceil(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left, left.length), mergeSort(right, right.length));
}

function merge(left, right) {
  const sortArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortArr.push(left.shift());
    } else {
      sortArr.push(right.shift());
    }
  }
  return [...sortArr, ...left, ...right];
}

const sortArr = mergeSort(arr, N);

let left = 0;
let right = N - 1;
let count = 0;

//투 포인터 방식
while (left < right) {
  const sum = sortArr[left] + sortArr[right];

  if (sum === x) {
    count++;
    left++;
    right--;
  } else if (sum < x) {
    left++;
  } else {
    right--;
  }
}

console.log(count);
