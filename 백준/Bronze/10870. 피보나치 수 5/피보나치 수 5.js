const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const count = Number(input);
console.log(fibonacci(count));

function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  const snapShot = new Array(num).fill(0);

  snapShot[0] = 0;
  snapShot[1] = 1;
  for (let i = 2; i <= num; i++) {
    const temp = snapShot[i - 2] + snapShot[i - 1];
    snapShot[i] = temp;
  }
  return snapShot[num];
}
