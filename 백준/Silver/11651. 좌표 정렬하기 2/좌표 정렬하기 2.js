const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, ...input] = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n");

let result = "";
const arr = input.map((ele) => ele.trim().split(" ").map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

for (let i = 0; i < arr.length; i++) {
  result += arr[i][0] + " " + arr[i][1] + "\n";
}

console.log(result);
