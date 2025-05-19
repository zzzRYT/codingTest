const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath, "utf8").trim().toString().split("");

function reverseWordsInString(S) {
  let result = "";
  let word = "";
  let insideTag = false;

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    if (char === "<") {
      if (word) {
        result += word.split("").reverse().join("");
        word = "";
      }
      insideTag = true;
      result += char;
    } else if (char === ">") {
      insideTag = false;
      result += char;
    } else if (insideTag) {
      result += char;
    } else if (char === " ") {
      result += word.split("").reverse().join("") + " ";
      word = "";
    } else {
      word += char;
    }
  }

  if (word) {
    result += word.split("").reverse().join("");
  }

  console.log(result);
}

reverseWordsInString(input);
