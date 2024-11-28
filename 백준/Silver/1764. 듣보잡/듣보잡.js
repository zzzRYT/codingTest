const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const count = input.shift().split(" ").map(Number);

const noSee = new Set(input.filter((_, idx) => idx < count[0]));
const noHear = new Set(
  input.filter((_, idx) => idx >= count[0] && idx < count[0] + count[1])
);

const newSet = intersection(noSee, noHear);
let result = [];
newSet.forEach((ele) => {
  result.push(ele);
});
result.sort();
console.log(newSet.size);
console.log(result.join("\n"));

function intersection(setA, setB) {
  const newArr = [...setA].filter((ele) => setB.has(ele));
  return new Set([...newArr]);
}
