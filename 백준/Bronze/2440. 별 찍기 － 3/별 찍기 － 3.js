const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString();

const ans = [];

for (let i = 0; i < +input; i++) {
  ans.push(
    Array(+input - i)
      .fill("*")
      .join("")
  );
}

console.log(ans.join("\n"));
