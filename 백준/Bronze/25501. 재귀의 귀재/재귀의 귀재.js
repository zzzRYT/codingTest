const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const count = Number(input.shift());
const ans = [];
for (let i = 0; i < count; i++) {
  const str = input.shift();
  ans.push(isPalindrome(str));
}
console.log(ans.join("\n"));

function recursion(s, l, r) {
  if (l >= r) return `${1} ${l + 1}`;
  else if (s[l] !== s[r]) return `${0} ${l + 1}`;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  const temp = recursion(s, 0, s.length - 1);
  return temp;
}
