function solution(n) {
    const obj = {
        0 : 0,
        1 : 1,
    }
    for(let i = 2; i <= n; i++) {
        obj[i] = obj[i-2] % 1234567 + obj[i-1] % 1234567  
    }
    return obj[n]  % 1234567
}