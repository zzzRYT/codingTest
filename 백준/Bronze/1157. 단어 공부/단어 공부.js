const input = require("fs").readFileSync("/dev/stdin").toString();

const word = input.toUpperCase();
// A-Z (65-90)
let count = Array(26).fill(0);

for (let i of word) {
  const char = i.charCodeAt();
  count[char - 65] += 1;
}

const max = Math.max(...count);
const maxCount = count.filter((x) => x === max).length;

const index = count.indexOf(max);
const result = String.fromCharCode(index + 65);

console.log(maxCount === 1 ? result : "?");
