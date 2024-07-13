function solution(a, b, n) {
    let result = 0;
    let np = 0;
    while (n >= a) {
        let temp = (parseInt(n / a) * b);
        n = temp  + (n % a)
        result += temp;
    }
    return result;
}