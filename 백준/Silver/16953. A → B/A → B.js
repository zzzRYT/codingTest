const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [A, B] = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

let count = 1;

while (A < B) {
  count++;
  if (A === B) {
    return;
  }
  const endB = B.toString().split("");
  if (+endB[endB.length - 1] === 1) {
    endB.pop();
    B = +endB.join("");
  } else {
    B = +endB.join("") / 2;
  }
}

if (A !== B) {
  console.log(-1);
} else {
  console.log(count);
}
