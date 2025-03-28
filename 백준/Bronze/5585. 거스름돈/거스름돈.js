const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString();

let change = 1000 - Number(input);
let ans = 0;

const changeArr = [500, 100, 50, 10, 5, 1];
let cur = 0;

while (change > 0) {
  if (change >= changeArr[cur]) {
    change -= changeArr[cur];
    ans++;
    if (change < changeArr[cur]) {
      cur++;
    }
  } else {
    cur++;
  }
}

console.log(ans);
