function solution(numbers) {
    //로직구성
    //2중for문을 이용해서 풀이?
    //i번째 수가 j번째 까지 검사를하고, 검사가 끝나면 출력하는방식
    //중복을 건너뛰는 방법...은 뭐가있을까...
    //배열 내부에 그 값이 있는지 없는지 판단
    //같은 위치의 인덱스끼리는 연산이 이루어지지 않게 해야함
    
    let result = [];
    let count = 1;
    for(let i = 0; i < numbers.length; i++) {
        for (let j = count; j < numbers.length; j++) {
            if (!(result.includes(numbers[i] + numbers[j]))) {
                result.push(numbers[i] + numbers[j]);
            }
        }
        count = count + 1;
    }
    return result.sort((a,b)=>a-b);
}