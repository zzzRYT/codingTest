//A, B, V가 input으로 들어옴

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

input.map((ele) => {
  const first = Number(ele[0]);
  const second = Number(ele[1]);
  if (getDivisor(first).includes(second)) {
    console.log("multiple");
  } else if (getDivisor(second).includes(first)) {
    console.log("factor");
  } else if (first === 0 && second === 0) {
  } else {
    console.log("neither");
  }
});

//약수 구하는 함수
function getDivisor(number) {
  const result = [];
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      result.push(i);
      if (i !== number / i) result.push(number / i);
    }
  }
  return result;
}
