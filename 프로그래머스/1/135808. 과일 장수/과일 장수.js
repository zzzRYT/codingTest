function solution(k, m, score) {
    const resultArr = [];
    let result = 0;
    score.sort((a, b)=>a-b);
    while(score.length > 0) {
        const temp = [];
        for(let i = 0; i < m; i++) {
            if(score.length === 0) break;
            temp.push(score.pop());
        }
        if(temp.length !== m) continue;
        resultArr.push(temp);
    }
    resultArr.map((data)=>{
        result += data[data.length-1] * data.length;
    })
    return result;
}