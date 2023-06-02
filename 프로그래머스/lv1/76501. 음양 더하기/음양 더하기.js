function solution(absolutes, signs) {
    let arr = [];
    let total = 0;
    for (let i = 0; i < absolutes.length; i++){
        if (signs[i] === true) {
            arr.push(absolutes[i]);
        } else {
            arr.push(((-2)*absolutes[i]) + absolutes[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}