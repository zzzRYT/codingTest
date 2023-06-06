function solution(d, budget) {
    d.sort((a,b)=>a-b);
    console.log(d)
    let count = 0;
    for (let i = 0; i < d.length; i++) {        
        if (budget < d[i]) {
            break;
        }
        budget = budget - d[i];
        count++
    }
    // console.log(count)
    return count;
}