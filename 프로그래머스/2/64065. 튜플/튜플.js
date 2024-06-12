function solution(s) {
    const result = [];
    const tempArr = s.replace(/{{|}}/g, '').split("},{").sort((a,b)=>a.length-b.length);
    tempArr.map((data)=>{
        const temp = data.split(',');
        temp.map((ele)=>{
            if(!result.includes(parseInt(ele))){
                result.push(parseInt(ele));
            }
        })
    });
    return result;
}