//여러 줄 입력
let fs = require("fs");
let [count, ...pay] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cent = [25, 10, 5, 1];

for (let i = 0; i < count; i++) {
  let changeMoney = pay[i];
  let count = 0;
  let counts = new Array(4);
  while (count < 4) {
    counts[count] = Math.floor(changeMoney / cent[count]);
    changeMoney = changeMoney % cent[count];
    count++;
  }
  console.log(counts.join(" "));
}
