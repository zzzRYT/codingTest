const fs = require("fs");
const S = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

console.log(S.charCodeAt(0));


