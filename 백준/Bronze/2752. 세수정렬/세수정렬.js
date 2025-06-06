const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split(" ").map(Number);

//선택 정렬
function selectSort(arr, n = 3) {
  let min = 0;
  for (let i = 0; i < n - 1; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}

//삽입 정렬
function insertSort(arr, n = 3) {
  for (let i = 0; i <= n; i++) {
    let cur = arr[i];
    let j = 0;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > cur) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = cur;
  }
  return arr;
}

//버블정렬
function bubbleSort(arr, n = 3) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let cur = j;
      if (arr[cur] > arr[j + 1]) {
        [arr[cur], arr[j + 1]] = [arr[j + 1], arr[cur]];
      }
    }
  }
  return arr;
}

//병합정렬
function mergeSort(arr, n = 3) {
  const mid = Math.ceil(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, n);
  console.log(left, right);
}

const selectArr = selectSort(input);
// const insertArr = insertSort(input);
// const bubbleArr = bubbleSort(input);

console.log(selectArr.join(" "));
// console.log(insertArr.join(" "));
// console.log(bubbleArr.join(" "));
