const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

let count = 0;
function recursion(num, count) {
  if (num <= 2) {
    count++;
    return 1;
  }
  return recursion(num - 1, count) + recursion(num - 2, count);
}

function dp(num) {
  const arr = new Array(num);
  let count = 0;
  arr[1] = 1;
  arr[2] = 1;
  for (let i = 3; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    count++;
  }
  return count;
}

console.log(recursion(Number(input), count), dp(Number(input)));
