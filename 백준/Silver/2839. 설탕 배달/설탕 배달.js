const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString();

let count = 0;

while (input > 0) {
  if (input % 5 === 0) {
    input -= 5;
  } else {
    input -= 3;
  }
  count++;
}

if (input !== 0) {
  console.log(-1);
  return;
}
console.log(count);
