const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [width, height] = input[0].split(" ").map(Number);
const count = Number(input[1]);
let horizon = [0, width];
let vertical = [0, height];

for (let i = 2; i < count + 2; i++) {
  const [direction, location] = input[i].split(" ").map(Number);

  if (direction === 0) {
    vertical.push(location);
  } else {
    horizon.push(location);
  }
}

horizon.sort((a, b) => a - b);
vertical.sort((a, b) => a - b);

let maxWidth = 0;
let maxHeight = 0;

for (let i = 1; i <= horizon.length; i++) {
  const width = horizon[i] - horizon[i - 1];
  if (maxWidth < width) {
    maxWidth = width;
  }
}

for (let i = 1; i <= vertical.length; i++) {
  const height = vertical[i] - vertical[i - 1];
  if (maxHeight < height) {
    maxHeight = height;
  }
}

console.log(maxWidth * maxHeight);
