const input = require("fs").readFileSync("/dev/stdin").toString();

/*
1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> 1/3 -> 1/4 -> 2/3

분자 
1
1 2
3 2 1
1 2 3 4
5 4 3 2 1
1 2 3 4 5 6
분모
1
2 1
1 2 3
4 3 2 1
1 2 3 4 5
6 5 4 3 2 1

분모 + 분자 = n번째 출 + 1

분자 = n + 1 - 분모
*/

let n = 1; //n 번째 줄
let count = 1; //순서

while (count < input) {
  count += n + 1;
  n++;
}

//분자 or 분모
//분자 = n + 1 - 분모
const temp = n - (count - Number(input));

if (n % 2 === 0) {
  console.log(`${temp}/${n - temp + 1}`);
} else {
  console.log(`${n - temp + 1}/${temp}`);
}
