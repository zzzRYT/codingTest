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
  let heads = Number(input.shift());
  const cuts = input.shift().split("");
  for (let j = 0; j < cuts.length; j++) {
    if (cuts[j] === "c") {
      heads += 1;
    } else {
      heads -= 1;
    }
  }
  ans.push(`Data Set ${i + 1}:\n${heads}`);
}

console.log(ans.join("\n\n"));
