function solution(n) {
    //n부터 시작해서 count를 하나씩 증가 (3가지 조건에 만족하는 숫자를 리턴)
    //좀 느릴 것 같다는 것
    //만들면서 다른 좋은 방식있는지 생각해보기
    let answer = n + 1;
    while(1) {
         if(binaryChange(n) === binaryChange(answer)) {
             return answer;
         }
        answer++;
    }
}

function binaryChange(num) {
    return num.toString(2).replace(/0/g, "").length;
}