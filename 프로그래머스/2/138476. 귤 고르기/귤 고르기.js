function solution(k, tangerine) {
    const obj = {}
    let count = 0;
    tangerine.map((size)=>{
        if(!obj[size]) {
            obj[size] = 1;
        } else {
            obj[size] += 1;
        }
    })
    const sizeArr = Object.values(obj).sort((a,b) => a - b)
    while(k > 0) {
        const temp = sizeArr.pop();
        k -= temp;
        count++;
    }
    return count;
}