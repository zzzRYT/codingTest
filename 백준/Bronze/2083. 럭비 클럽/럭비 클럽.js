const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

input.pop();
const ans = [];
for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ");
  const age = Number(arr[1]);
  const weight = Number(arr[2]);
  let temp = "";
  if (age > 17 || weight >= 80) temp = "Senior";
  else temp = "Junior";
  ans.push(`${arr[0]} ${temp}`);
}
console.log(ans.join("\n"));
