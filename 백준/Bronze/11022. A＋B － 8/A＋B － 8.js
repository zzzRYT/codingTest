const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, ...cases] = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n");

let result = "";
cases.map((ele, index) => {
  const temp = ele.split(" ").map(Number);
  result += `Case #${index + 1}: ${temp[0]} + ${temp[1]} = ${
    temp[0] + temp[1]
  }\n`;
});

console.log(result);
