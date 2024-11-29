const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const result = [];

input.map((ele) => {
  const temp = ele
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  if (temp[0] ** 2 === temp[1] ** 2 + temp[2] ** 2) {
    result.push("right");
  } else {
    result.push("wrong");
  }
});

result.pop();
console.log(result.join("\n"));
