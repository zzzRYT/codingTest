function solution(x, n) {
    let xn = Math.abs(x);
    var answer = [];
    if(x !== 0) {
        for(let i = xn; i <= xn*n; i=i+xn) {
            x < 0 ? answer.push(-i) : answer.push(i);
        }
    } else {
        for(let i = 0; i < n; i++) {
            answer.push(x);
        }
    }
    return answer;
}