function solution(k, score) {
    const result = [];
    const tempArr = [];
    score.map((data, idx)=>{
        if(k > idx) {
            tempArr.push(data);
            result.push(Math.min(...tempArr));
        } else {
            if(data > Math.min(...tempArr)) {
                for(let i = 0; i < tempArr.length; i++) {
                    if (tempArr[i] === Math.min(...tempArr)) {
                        tempArr.splice(i, 1);
                        break;
                    }
                }
                tempArr.push(data);
            }
          result.push(Math.min(...tempArr));
        }
    });
    return result;
}