const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

const obj1 = new Object();
const obj2 = new Object();

input.map((v) => {
  if (obj1[v[0]] !== undefined) {
    obj1[v[0]] += 1;
  } else {
    obj1[v[0]] = 1;
  }
  if (obj2[v[1]] !== undefined) {
    obj2[v[1]] += 1;
  } else {
    obj2[v[1]] = 1;
  }
});

const location1 = Object.entries(obj1).filter((ele) => ele[1] === 1);
const location2 = Object.entries(obj2).filter((ele) => ele[1] === 1);
console.log(location1[0][0], location2[0][0]);
