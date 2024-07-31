function solution(t, p) {
    const newArr = newArrHandler(t, p);
    return comparisonArr(newArr, p);
}

//길이에 맞게 불러오는 로직
function newArrHandler(t, p) {
    const newArr = [];
    let tempStr = "";
    [...t].map((_, idx)=>{
        const temp = t.substr(idx, p.length);
        if(temp.length === p.length) newArr.push(temp);
    })
    return newArr;
}

//크기를 비교해서
function comparisonArr(arr, p) {
    let count = 0;
    arr.map((data)=>{
        if (Number(data) <= Number(p)) count++;
    })
    return count;
}