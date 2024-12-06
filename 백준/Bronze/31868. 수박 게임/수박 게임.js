const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().toString().split(" ");

let level = Number(input[0]);
let count = Number(input[1]);

for (let i = 0; i < level -1; i++) {
  count = Math.floor(count / 2);
}

console.log(count);
