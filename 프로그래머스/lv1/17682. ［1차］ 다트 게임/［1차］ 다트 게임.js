function solution(dartResult) {
    const result = [0, 0, 0];
    const regex = dartResult.match(/((\d{1,2})(S|D|T)(\*|\#?))/g);
    let cnt = 0;
    // console.log(regex);
    //각 요소의 S D T 의 결과값 result에 넣기
    //반례 10을 추가
    for (let i = 0; i < 3; i++) {
        if (regex[i].includes('S')) {
            if (regex[i][0] === '1' && regex[i][1] === '0') {
                result[cnt] = parseInt((regex[i][0] + regex[i][1]) ** 1)
            }
            else {
                result[cnt] = parseInt(regex[i][0] ** 1);
            }
            cnt++;
        }
        if (regex[i].includes('D')) {
            if (regex[i][0] === '1' && regex[i][1] === '0') {
                result[cnt] = parseInt((regex[i][0] + regex[i][1]) ** 2)
            }
            else {
                result[cnt] = parseInt(regex[i][0] ** 2);
            }
            cnt++;
        }   
        if (regex[i].includes('T')) {
            if (regex[i][0] === '1' && regex[i][1] === '0') {
                result[cnt] = parseInt((regex[i][0] + regex[i][1]) ** 3)
            }
            else {
                result[cnt] = parseInt(regex[i][0] ** 3);
            }
            cnt++;
        }
    }
//     if (regex[i][0] && regex[i][0] === /\d/gm) {
        
//     }
    // console.log(result);
    //첫 번째에 *이나 #이 2있을 때
    cnt = 0;
    for (let i = 0; i < 1; i++) {
        if (regex[i].includes('*')) {
            result[cnt] *= 2;
        }
        if (regex[i].includes('#')) {
            result[cnt] *= -1;
        }
    }
    // console.log(result);
    //두 번째 부터 * 이나 # 이 나올 때
    cnt = 1;
    for (let i = 1; i < 3; i++) {
        if (regex[i].includes('*')) {
            result[cnt] *= 2;
            result[cnt-1] *= 2;
        }
        if (regex[i].includes('#')) {
            result[cnt] *= -1;
        }
        cnt++
    }
    // console.log(result);
    //result의 요소 값을 더함
    const total = result.reduce((prev, cur) => {
        return prev + cur;
    })
    return total;
    // console.log(total);
}