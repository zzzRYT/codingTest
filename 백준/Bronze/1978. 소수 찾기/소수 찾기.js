const fs = require("fs");
const [cntStr, str] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\r?\n/);

const solution = () => {
  const cnt = parseInt(cntStr);
  const arr = str.split(" ").filter((d) => {
    const num = parseInt(d);
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (d % i === 0) {
        return false;
      }
    }
    return true;
  });
  console.log(arr.length);
};

solution();
