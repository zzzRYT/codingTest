function solution(numbers) {
    const searchNum = [0,1,2,3,4,5,6,7,8,9];
    let result = 0;
    searchNum.map((data)=>{
        numbers.includes(data) ? undefined : result += data;
    })
    return result;
}