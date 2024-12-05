const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().toString().split("\n");

const NK = input.shift().split(" ");
const N = Number(NK[0]); //학생 수
const K = Number(NK[1]); //과목 수
//P = 등수 * 100 / 학생 수

const rates = input[0].split(" ").map(Number);
const ans = [];
for (let i = 0; i < K; i++) {
  const div = Math.floor((rates[i] * 100) / N);
  if (0 <= div && div <= 4) ans.push(1);
  else if (4 < div && div <= 11) ans.push(2);
  else if (11 < div && div <= 23) ans.push(3);
  else if (23 < div && div <= 40) ans.push(4);
  else if (40 < div && div <= 60) ans.push(5);
  else if (60 < div && div <= 77) ans.push(6);
  else if (77 < div && div <= 89) ans.push(7);
  else if (89 < div && div <= 96) ans.push(8);
  else if (96 <= div && div <= 100) ans.push(9);
}

console.log(ans.join(" "));
