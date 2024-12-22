const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const cakeLength = Number(input.shift());
const people = Number(input.shift());

const map = new Map();
for (let i = 1; i <= cakeLength; i++) {
  map.set(i, 0);
}

let max = 0;
let expectation = 0;
for (let i = 0; i < people; i++) {
  const temp = input[i].split(" ");
  const start = Number(temp[0]);
  const end = Number(temp[1]);
  if (max < end - start) {
    max = end - start;
    expectation = i + 1;
  }
  for (let j = start; j <= end; j++) {
    if (map.get(j) !== 0) continue;
    map.set(j, i + 1);
  }
}

const obj = {};
for (let ele of map.values()) {
  if (ele === 0) continue;
  if (obj[ele]) {
    obj[ele] = ++obj[ele];
  } else {
    obj[ele] = 1;
  }
}

let real = 0;
let realMax = 0;
for (let [key, value] of Object.entries(obj)) {
  if (realMax < value) {
    realMax = value;
    real = key;
  }
}
console.log(expectation);
console.log(real);
