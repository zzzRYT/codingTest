//입력받는 부분
const fs=require('fs')
const input=fs.readFileSync('/dev/stdin','utf-8').toString().trim().split('\n')

//맨 앞 값을 지워준다. 배열의 길이는 함수를 이용하면 구할 수 있기 때문이다.
input.shift()

//array->Set->array 과정을 거쳐 중복 제거
s_arr=[...new Set(input)]

//뒤에 있는 조건이 사전순으로 정렬을 해준다.
s_arr = s_arr.sort((a,b)=>a.length - b.length || a.localeCompare(b)).join('\n')

console.log(s_arr)