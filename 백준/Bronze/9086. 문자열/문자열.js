const fs = require("fs");
const [count, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < Number(count); i++) {
  let str = words[i].trim().split("");
  console.log(`${str[0]}${str[str.length - 1]}`);
}
