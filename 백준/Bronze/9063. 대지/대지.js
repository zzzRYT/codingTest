const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, ...locations] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

//min, max
const obj = changeArr(locations);
const width = Math.max(...obj.width) - Math.min(...obj.width);
const height = Math.max(...obj.height) - Math.min(...obj.height);
console.log(width * height);

function changeArr(arr) {
  const width = [];
  const height = [];
  arr.map((ele) => {
    width.push(Number(ele[0]));
    height.push(Number(ele[1]));
  });
  return { width, height };
}
