const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const codeFestival1 = {
    1 : {
        price : 5000000,
        end: 1,
    },
    2: {
        price: 3000000,
        end: 3,
    },
    3: {
        price: 2000000,
        end: 6,
    },
    4: {
        price: 500000,
        end: 10,
    },
    5: {
        price: 300000,
        end: 15,
    },
    6: {
        price: 100000,
        end: 21,
    }
}

const codeFestival2 = {
    1: {
        price: 5120000,
        end: 1,
    },
    2: {
        price: 2560000,
        end: 3,
    },
    3: {
        price: 1280000,
        end: 7,
    },
    4: {
        price: 640000,
        end: 15,
    },
    5: {
        price: 320000,
        end: 31,
    },
}

const count = Number(input.shift());
const ans = [];

for(let i = 0; i < count; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    let result = 0;
    if(a === 0 || a > 21) {
        result += 0;
    } else {
        for(let key in codeFestival1) {
            if(a <= codeFestival1[key].end) {
                result += codeFestival1[key].price;
                break;
            }
        }
    }
    if(b === 0 || b > 31) {
        result += 0;
    } else {
        for(let key in codeFestival2) {
            if(b <= codeFestival2[key].end) {
                result += codeFestival2[key].price;
                break;
            }
        }
    }
    ans.push(result);
}

console.log(ans.join("\n"))