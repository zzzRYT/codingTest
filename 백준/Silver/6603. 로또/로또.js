const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf-8").trim().toString().split("\n");

function getCombinations(arr, target) {
  const results = [];
  if (target === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, target - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}

let count = 0;
const ans = [];
while (count < input.length - 1) {
  const [K, ...S] = input[count].split(" ").map(Number);
  const temp = getCombinations(S, 6);
  for (let i = 0; i < temp.length; i++) {
    ans.push(temp[i].join(" "));
  }
  ans.push("");
  count++;
}

console.log(ans.join("\n"));
