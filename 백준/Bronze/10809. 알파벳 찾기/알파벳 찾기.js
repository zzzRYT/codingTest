//여러 줄 입력
let fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

const words = new Array(26).fill(-1);
for (let i = 0; i < input.length; i++) {
  const ascii = input[i].charCodeAt(0) - 97;
  if (words[ascii] !== -1) {
    continue;
  }
  words[ascii] = i;
}

console.log(words.join(" "));
