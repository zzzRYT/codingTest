const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let count = 0;
let answer = -1;

insertSort(A, 1);
console.log(answer);

function insertSort(arr, index) {
  if (index >= N) return; // base case (재귀 종료)

  let newItem = arr[index];
  let loc = index - 1;

  while (loc >= 0 && arr[loc] > newItem) {
    arr[loc + 1] = arr[loc]; // 값 이동
    loc--;
    count++;

    if (count === K) {
      answer = arr[loc + 1]; // K번째 저장 값 저장
    }
  }

  if (loc + 1 !== index) {
    arr[loc + 1] = newItem;
    count++;

    if (count === K) {
      answer = newItem;
    }
  }

  insertSort(arr, index + 1); // 다음 단계 재귀 호출
}
