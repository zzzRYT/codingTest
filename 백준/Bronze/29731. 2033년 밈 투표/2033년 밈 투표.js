const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const Rick_Astley = {
  "Never gonna give you up": true,
  "Never gonna let you down": true,
  "Never gonna run around and desert you": true,
  "Never gonna make you cry": true,
  "Never gonna say goodbye": true,
  "Never gonna tell a lie and hurt you": true,
  "Never gonna stop": true,
};

const count = Number(input.shift());
let ans = "No";
for (let i = 0; i < count; i++) {
  const temp = input.shift();
  if (!Rick_Astley[temp]) {
    ans = "Yes";
    console.log(ans);
    return;
  }
}

console.log(ans);
return;
