function solution(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr[i] = s[i];
    }
    arr.sort().reverse();
    let tol = "";
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        tol = tol + temp
    }
    return tol
}