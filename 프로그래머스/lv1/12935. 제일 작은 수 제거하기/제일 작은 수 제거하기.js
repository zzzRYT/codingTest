function solution(arr) {
    const num = Math.min.apply(null, arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            arr.splice(i, 1);
        }
    }
    if (arr.length === 0) {
        arr[0] = -1;
        return arr;
    }
    return arr;
    console.log(arr);
}