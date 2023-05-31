function solution(n) {
    let tol = "";
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            tol = tol + "수";
        } else {
            tol = tol + "박";
        }
    }
    return tol;
}