function solution(n) {
    const arr = new Array(n);
    //0과 1을 제외하긴 위해서 false값으로 값을 부여
    arr[1] = false;
    arr[2] = false;
    for(let i = 2; i <=n; i++) {
        arr[i] = true;
    }
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(arr[i]) {
            for (let j = i * i; j <= n; j+=i) {
                arr[j] = false;
            }
        }
    }
    
    const temp = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            temp.push(i);
        }
    }
    return temp.length;
}