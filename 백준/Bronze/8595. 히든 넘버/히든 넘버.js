const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const regex = /[A-z]|(?<=[0-9])[A-z](?=[0-9])/gi;
const allCode = input.shift().split(regex);
let ans = 0;
for (let i = 0; i < allCode.length; i++) {
  if (allCode[i].length > 0) {
    ans += Number(allCode[i]);
  }
}
console.log(ans);
