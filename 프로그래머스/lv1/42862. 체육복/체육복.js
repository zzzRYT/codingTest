function solution(n, lost, reserve) {
    const arr = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        arr.push(1);
    }
    for (let i = 0; i < lost.length;i++) {
        arr[(lost[i]-1)] -= 1;
    }
    for (let i = 0; i < reserve.length; i++) {
        arr[(reserve[i]-1)] += 1;
    }
    
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            if (arr[i-1] === 2 || arr[i+1] === 2) {
                if (arr[i-1] === 2) {
                    arr[i-1] -= 1;
                    arr[i] += 1;
                } else {
                    arr[i+1] -= 1;
                    arr[i] += 1;
                }
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    // console.log(arr);
    // console.log(count);
    return count;
}