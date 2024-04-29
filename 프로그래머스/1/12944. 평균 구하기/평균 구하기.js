function solution(arr) {
    const result = arr.reduce((acc, cur) => acc + cur) / arr.length;
    return result;
}