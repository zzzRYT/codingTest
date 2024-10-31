//여러 줄 입력
let fs = require("fs");
var [count, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

for (let i = 0; i < count; i++) {
  let word = words[i][1];
  const result = new Array(word.length).fill("");
  for (let j = 0; j < word.length; j++) {
    for (let k = 0; k < words[i][0]; k++) {
      result[j] += word[j];
    }
  }
  console.log(result.join(""));
}
