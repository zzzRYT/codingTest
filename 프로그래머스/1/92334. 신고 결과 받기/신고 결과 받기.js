function solution(id_list, report, k) {
    //신고된 사람 카운트 하는 객체
    const reportObj = {};
    //신고한 사람 객체로 만들기
    const obj = {};
    //신고된 사람 배열
    const reportArr = [];
    //이메일 받는 수 배열
    const result = [];
    
    //각 객체에 유저 ID부여
    id_list.map((data)=>{
        obj[data] = [];
        reportObj[data] = 0;
    })
    
    //신고된 사람을 객체 안에 배열 형태로 바꾸기
    report.map((data)=>{
        const temp = data.split(" ");
        if(!obj[temp[0]].includes(temp[1])) {
            obj[temp[0]].push(temp[1]);
        }
    })
    
    //2중 반복문을 통해서 신고된 횟수를 카운트
    id_list.map((data)=>{
        obj[data].map((ele)=>{
            reportObj[ele] += 1;
        })
    })
    
    //위에서 찾은 신고된 횟수를 k와 비교해서 정지된 이용자를 담는 배열에 넣기
    for(const [key, value] of Object.entries(reportObj)) {
        if(value >= k) {
            reportArr.push(key);
        }
    }
    
    //map 안쪽에서 filter를 이용해서 신고한 유저, 정지된 유저의 배열을 비교, result에 그 길이 값을 담음
    id_list.map((data)=>{
        result.push(obj[data].filter(x=>reportArr.includes(x)).length);
    })
    return result;
}