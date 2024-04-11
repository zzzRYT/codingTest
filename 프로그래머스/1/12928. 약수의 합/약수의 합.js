function solution(n) {
    /*
    * 로직분석
    * 1~n까지의 수 중 나온다. 즉, 최대값이 n이란 소리
    * 1부터 n까지 반복하면서, n과 나눴을 때 나머지가 0 인 값을 배열에 저장
    * 중복값이 있다면 제거
    */
    let total = 0;
    for(let i = 1; i <= n; i++) {
        if(n%i === 0) {
            total += i;
        }
    }
    return total;
}