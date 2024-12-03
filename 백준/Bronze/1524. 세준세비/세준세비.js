const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [count, ...wars] = fs
  .readFileSync(filePath, "utf8")
  .toString()
  .trim()
  .split("\n\n");

for (let i = 0; i < count; i++) {
  const input = wars[i].split("\n");
  input.shift();
  sPower = Math.max(...input.shift().split(" ").map(Number));
  bPower = Math.max(...input.shift().split(" ").map(Number));

  if (sPower >= bPower) {
    console.log("S");
  } else if (bPower > sPower) {
    console.log("B");
  } else {
    console.log("C");
  }
}
