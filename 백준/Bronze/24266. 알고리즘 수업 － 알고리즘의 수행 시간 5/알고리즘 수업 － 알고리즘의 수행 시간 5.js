const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString();

let num = BigInt(input);
console.log(`${num * num * num}` + "\n3");
