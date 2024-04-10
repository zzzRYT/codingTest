function solution(n) {
    const resultArr = String(n).split('').map(data=>parseInt(data, 10));
    return resultArr.reverse();
}