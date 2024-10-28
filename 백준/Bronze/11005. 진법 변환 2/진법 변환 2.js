const fs = require('fs');
let [N,B] = fs.readFileSync("./dev/stdin").toString().trim().split(' ').map(Number);
let answer = '';


if(N==0){
  console.log(0)
}else{ 
  while(N>0){
    let s = notation(N%B);
    answer = s+answer;
    N = Math.floor(N/B)
  }
  console.log(answer)
}


function notation(x){
  if(x<10) return x;
  return String.fromCharCode(x+55)
}