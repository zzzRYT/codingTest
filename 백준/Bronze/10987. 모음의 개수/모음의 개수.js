const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").toString().split("");

let ans = 0;
for (let i = 0; i < input.length; i++) {
  switch (input[i]) {
    case "a":
      ans++;
      break;
    case "e":
      ans++;
      break;
    case "i":
      ans++;
      break;
    case "o":
      ans++;
      break;
    case "u":
      ans++;
      break;
    default:
      break;
  }
}

console.log(ans);
