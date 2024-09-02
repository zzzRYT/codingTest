function solution(keymap, targets) {
    //버튼을 몇 번 누르는가?
    //target에 인덱스 번호에 맞는 위치의 keymap를 활용해서 몇 번 누르는지 판별,
    //keymap의 첫 번째 인덱스인지, 두 번째 인덱스인지는 중요하지 않음
    //처음 값을 찾으면, 동일한 값은 찾을 필요가 없음
    const newObj = keyObj(keymap);
    const result = [];
    targets.map((data)=>{
        let count = 0;
        for(let i = 0; i < data.length; i++) {       
            if(!newObj[data[i]]) {
                result.push(-1);
                return result;
            } else {
                count += newObj[data[i]];
            }
        }
        if (count !== 0 )result.push(count);
    })
    return result;
}

//객체로 반환
function keyObj(keymap) {
    const obj = {}
    keymap.map((data)=>{
        for(let i = 0; i < data.length ;i++) {
            if(obj[data[i]] === undefined) {
                obj[data[i]] = i+1;
            } else if(obj[data[i]] > i) {
                obj[data[i]] = i+1;
            }
        }
    })
    return obj;
}
