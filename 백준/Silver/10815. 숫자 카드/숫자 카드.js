const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, nList, M, mList] = fs.readFileSync(filePath, "utf8").trim().split("\n");

const result = [];

const nListTemp = nList.split(" ");
const set = new Set(nListTemp);

const mListTemp = mList.split(" ");
for (let m of mListTemp) {
  if (set.has(m)) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));
