let fs = require("fs");
let input1 = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(checkNum(input1[0], input1[1]));

function checkNum(num1, num2) {
  const n1 = Number(num1);
  const n2 = Number(num2);
  if (n1 > n2) return ">";
  if (n1 < n2) return "<";
  if (n1 == n2) return "==";
}
