function solution(ingredient) {
    //1 2 3 1
    let buggerCnt = 0; //버거 카운트
    let cnt = 0;
    const buggerArr = "1231";
    while(cnt < ingredient.length) {
        const tempArr = [];
        for(let i = cnt; i < cnt+4; i++) {
            tempArr.push(ingredient[i]);
        }
        if(tempArr.join("") === buggerArr) {
            buggerCnt++;
            ingredient.splice(cnt, 4).join("");
            cnt=cnt-4;
        }
        cnt++;
    }
    return buggerCnt;
    
}