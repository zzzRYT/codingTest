const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString();

const N = +input;
const ans = [];

for (let i = N; i > 0; i--) {
  let str = "";
  for (let j = 0; j < i - 1; j++) {
    str += " ";
  }
  for (let j = i - 1; j < N; j++) {
    str += "*";
  }
  ans.push(str);
}

console.log(ans.join("\n"));
