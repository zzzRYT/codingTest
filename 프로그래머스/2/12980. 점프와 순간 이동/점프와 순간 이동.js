function solution(n) {
    let count = 0;
    let result = n;
    while(result > 1) {
        if(result % 2 !== 0) {
            count++
        }
        result = Math.floor(result / 2)
    }
    return count + 1;
}