const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString();
let theNumberAtTheEnd = 665;

while (input > 0) {
  theNumberAtTheEnd++;

  if (theNumberAtTheEnd.toString().includes("666")) {
    input--;
  }
}

console.log(theNumberAtTheEnd);
