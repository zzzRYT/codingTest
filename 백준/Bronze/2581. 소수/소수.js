//여러 줄 입력
let fs = require("fs");
var [M, N] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const min = Number(M);
const max = Number(N);

const resultArr = [];
for (let i = min; i <= max; i++) {
  if (isPrime(i)) {
    resultArr.push(i);
  }
}

if (resultArr.length !== 0) {
  console.log(resultArr.reduce((acc, cur) => acc + cur)); //합
  console.log(Math.min(...resultArr)); //최소값
} else {
  console.log(-1);
}

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
