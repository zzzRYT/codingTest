const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").toString().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

let ans = "";
if (M === 1 || M === 2) {
  ans = "NEWBIE!";
} else if (M <= N) {
  ans = "OLDBIE!";
} else {
  ans = "TLE!";
}

console.log(ans);
