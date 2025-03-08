const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const n = Number(input.shift());
const nList = input.shift().trim().split(" ");
const [m, k] = input.shift().split(" ").map(Number);
const temp = [];

for (let i = 0; i < m; i++) {
  const uniqueEggplant = input
    .shift()
    .split(" ")
    .map((ele) => nList[Number(ele) - 1]);
  pFirst(uniqueEggplant, 0);
}
wFirst(temp, 0);

function pFirst(ele) {
  if (ele.length === 1) {
    return temp.push(ele[0]);
  }

  if (ele[0] === "P" || ele[1] === "P") {
    ele.splice(0, 2, "P");
    pFirst(ele);
  } else if (ele[0] === "W" && ele[1] === "W") {
    ele.splice(0, 2, "W");
    pFirst(ele);
  }
}

function wFirst(ele) {
  if (ele.length === 1) {
    return console.log(ele[0]);
  }

  if (ele[0] === "W" || ele[1] === "W") {
    ele.splice(0, 2, "W");
    wFirst(ele);
  } else if (ele[0] === "P" && ele[1] === "P") {
    ele.splice(0, 2, "P");
    wFirst(ele);
  }
}
