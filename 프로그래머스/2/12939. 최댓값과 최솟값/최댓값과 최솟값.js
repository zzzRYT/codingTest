function solution(s) {
    var answer = '';
    const arr = s.split(" ");
    return sortArr(arr);

}

function sortArr(arr) {
    let min = arr[0];
    let max = arr[0];
    arr.map((data)=>{
        if(min > Number(data)) min = Number(data);
        if(max < Number(data)) max = Number(data);
    })
    return `${min} ${max}`
}
