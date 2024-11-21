const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, ...input] = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((ele) =>
  ele
    .trim()
    .split(" ")
    .map((v) => Number(v))
);

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

arr.map((ele) => console.log(ele.join(" ")));
