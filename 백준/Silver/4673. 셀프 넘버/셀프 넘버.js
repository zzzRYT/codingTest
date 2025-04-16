const arr = new Array(10001).fill(true);
const ans = [];

for (let i = 1; i <= 10001; i++) {
  arr[getInitialization(i)] = false;
  if (arr[i]) {
    ans.push(i);
  }
}

console.log(ans.join("\n"));

function getInitialization(num) {
  const splitNumber = num.toString().split("").map(Number);
  let sum = num;
  for (let i = 0; i < splitNumber.length; i++) {
    sum += splitNumber[i];
  }
  return sum;
}
