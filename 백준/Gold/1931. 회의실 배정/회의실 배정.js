const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const N = +input[0];
const meetings = input.slice(1).map((line) => line.split(" ").map(Number));

function insertSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let cur = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j][1] > cur[1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let lCount = 0;
  let rCount = 0;
  const newArr = [];
  while (lCount < left.length && rCount < right.length) {
    if (left[lCount][1] < right[rCount][1]) {
      newArr.push(left[lCount]);
      lCount++;
    } else if (left[lCount][1] === right[rCount][1]) {
      if (left[lCount][0] < right[rCount][0]) {
        newArr.push(left[lCount]);
        lCount++;
      } else {
        newArr.push(right[rCount]);
        rCount++;
      }
    } else {
      newArr.push(right[rCount]);
      rCount++;
    }
  }
  return [...newArr, ...left.slice(lCount), ...right.slice(rCount)];
}

function checkMeeting(arr) {
  let startMeeting = arr[0][0];
  let endMeeting = arr[0][1];
  let ans = 1;
  for (let i = 1; i < N; i++) {
    nextStart = arr[i][0];
    nextEnd = arr[i][1];

    if (endMeeting <= nextStart) {
      ans++;
      startMeeting = nextStart;
      endMeeting = nextEnd;
    }
  }
  return ans;
}

const sortArr = mergeSort(meetings);
const ans = checkMeeting(sortArr);

console.log(ans);
