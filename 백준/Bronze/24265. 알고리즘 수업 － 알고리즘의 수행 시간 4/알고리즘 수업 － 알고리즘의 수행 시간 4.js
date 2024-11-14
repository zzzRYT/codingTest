const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString();

console.log(((Number(input) * (Number(input)-1))/2) + "\n2");
