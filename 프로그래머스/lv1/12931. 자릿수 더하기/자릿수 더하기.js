function solution(n) {
    let arr = (n+"").split('');
    let tot = 0;
    for (let i = 0; i < arr.length; i++) {
        tot = tot + Number(arr[i]);
    }
    return tot;
}