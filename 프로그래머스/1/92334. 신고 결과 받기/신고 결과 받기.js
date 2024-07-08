function solution(id_list, report, k) {
    //신고된 사람 카운트
    const reportObj = {};
    //신고한 사람 객체로 만들기
    const obj = {};
    //신고된 사람 배열
    const reportArr = [];
    //이메일 받는 수 배열
    const result = [];
    id_list.map((data)=>{
        obj[data] = [];
        reportObj[data] = 0;
    })
    report.map((data)=>{
        const temp = data.split(" ");
        if(!obj[temp[0]].includes(temp[1])) {
            obj[temp[0]].push(temp[1]);
        }
    })
    id_list.map((data)=>{
        obj[data].map((ele)=>{
            reportObj[ele] += 1;
        })
    })
    for(const [key, value] of Object.entries(reportObj)) {
        if(value >= k) {
            reportArr.push(key);
        }
    }
    id_list.map((data)=>{
        result.push(obj[data].filter(x=>reportArr.includes(x)).length);
    })
    return result;
}