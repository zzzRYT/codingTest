const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const count = Number(input) / 4;

const ans = new Array(count).fill("long");

console.log(ans.join(" ") + " int");
