const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const prize = Number(input);
const taxAll = prize * (22 / 100);
const taxSale = (prize - prize * (80 / 100)) * (22 / 100);
console.log(prize - taxAll, prize - taxSale);
