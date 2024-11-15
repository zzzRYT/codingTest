const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let a = input[0].trim().split(" ");
let a1 = Number(a[0]);
let a0 = Number(a[1]);
let c = Number(input[1]);
let n0 = Number(input[2]);

if (a0 < 0) n0 = n0 - a0;

console.log(a1 * n0 + a0 <= c * n0 ? 1 : 0);
