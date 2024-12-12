const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

input.pop();
const regex = /(\(|\[|\)|\])/g;
const ans = [];
for (let i = 0; i < input.length; i++) {
  if (input[i].trim() === ".") {
    ans.push("yes");
    continue;
  }
  const bracket = input[i].match(regex);
  if (!bracket) {
    ans.push("yes");
  } else {
    ans.push(perfectBracket(bracket));
  }
}
console.log(ans.join("\n"));

function perfectBracket(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "[") {
      temp.push(arr[i]);
    } else {
      if (temp[temp.length - 1] === "(" && arr[i] === ")") {
        temp.pop();
      } else if (temp[temp.length - 1] === "[" && arr[i] === "]") {
        temp.pop();
      } else {
        temp.push(arr[i]);
      }
    }
  }
  return temp.length !== 0 ? "no" : "yes";
}
