const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, A, B] = fs.readFileSync(filePath, "utf8").trim().split("\n");

const count = N.split(" ").map(Number);
const setA = new Set(A.split(" ").map(Number));
const setB = new Set(B.split(" ").map(Number));

const sizeA = difference(setA, setB).size;
const sizeB = difference(setB, setA).size;

console.log(sizeA + sizeB);

function difference(setA, setB) {
  return new Set([...setA].filter((ele) => !setB.has(ele)));
}
