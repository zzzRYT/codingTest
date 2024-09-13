function solution(A,B){
    //작은 값을 고르면, 큰 값을 고르기
    //큰 값부터 값을 고르도록 해야함 => 정렬부터 진행
    let answer = 0;
    const newA =  A.sort((a,b)=>b-a)
    const newB =  B.sort((a,b)=>a-b)
    for(let i = 0; i < A.length; i++) {
        answer += newA[i]*newB[i];
    }
    return answer;
}
