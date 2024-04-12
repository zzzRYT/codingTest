function solution(n) {
    const newN = n + "";
    return parseInt(newN.split('').sort().reverse().join(''));
}