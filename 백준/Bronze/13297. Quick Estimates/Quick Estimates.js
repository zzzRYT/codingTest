const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

input.shift();
let ans = "";
input.map((ele) => (ans += ele.length + "\n"));

console.log(ans);
