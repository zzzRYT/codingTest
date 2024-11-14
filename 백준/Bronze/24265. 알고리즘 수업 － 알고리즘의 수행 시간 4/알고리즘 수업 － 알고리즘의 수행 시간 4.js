const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString();

let result = 0;
for (let i = Number(input) - 1; i > 0; i--) {
  result += i;
}
console.log(result + "\n2");
