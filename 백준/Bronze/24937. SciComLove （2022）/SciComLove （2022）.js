const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath, "utf-8").trim().toString();

const obj = {
  1: "ciComLoveS",
  2: "iComLoveSc",
  3: "ComLoveSci",
  4: "omLoveSciC",
  5: "mLoveSciCo",
  6: "LoveSciCom",
  7: "oveSciComL",
  8: "veSciComLo",
  9: "eSciComLov",
  0: "SciComLove",
};

const temp = oneLocation(input);
console.log(obj[temp]);

function oneLocation(count) {
  const countArr = count.split("");
  const temp = countArr[countArr.length - 1];
  return Number(temp);
}
