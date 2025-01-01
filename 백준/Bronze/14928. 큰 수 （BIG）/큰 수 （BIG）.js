const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").toString();

const N = BigInt(input);

const ans = N % 20000303n;
console.log(ans.toString());
