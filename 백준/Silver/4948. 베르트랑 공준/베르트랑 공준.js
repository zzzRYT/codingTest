const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath, "utf8")
  .trim()
  .toString()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length; i++) {
  let n = input[i];
  if (n === 1) console.log(1);
  else if (n === 0) return;
  else {
    let twoN = 2 * n;
    const temp = getPrime(twoN);
    const ans = temp.filter((ele, idx) => idx > n && ele);
    console.log(ans.length - 1);
  }
}

function getPrime(num) {
  const arr = new Array(num + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (let j = i * i; j < num; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}
