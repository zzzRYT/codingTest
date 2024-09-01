function solution(n, m, section) {
    //1m 가 한 구역인 n개
    //m미터의 롤러
    //section 칠 한 번 더 해야하는 곳
    //생각1) 특징이, section은 오름차순이니깐, 첫 번째 요소를 기준으로 시작하면 될 듯?
    //생각2) 첫 번째를 기준으로 m길이 만큼 칠하고, 남는 부분의 가장 빠른 수를 기준으로 칠하면 될듯?
    //생각3) 칠해진것에 대한 기준은? boolean값으로 하면 될까? -> 배열을 만들어 보자
    const newPaint = newArr(n,section);
    let count = 0;
    while(newPaint.includes(false)) {
        const firstPaint = newPaint.indexOf(false);
        for(let j = firstPaint; j <= firstPaint+(m-1); j++) {
            if(!newPaint[j]) {
                newPaint[j] = true;
            }
            
        }
        count++;
    }
    return count;
}

function newArr(n, section) {
    const newPaint = [];
    for(let i = 1; i <= n; i++) {
        if(section.includes(i)) {
            newPaint.push(false);
        } else {
            newPaint.push(true);
        }
    }
    return newPaint;
}