function solution(X, Y) {
    const arr_x = [];
    const arr_y = [];
    const result = [];
    for(let i = 0; i <= 9; i++) {
        arr_x[i]=X.split(i).length-1;
        arr_y[i]=Y.split(i).length-1;
        if(arr_x[i] != 0 && arr_y[i] != 0) {
            for(let j = 0; j < Math.min(arr_x[i], arr_y[i]); j++) {
                result.push(i);
            }
        }
    }
    result.sort((a, b)=>b-a);
    console.log(result);
    if(result.length === 0) return "-1";
    else if(result[0] === 0 && result[1] === 0) return "0";
    else return result.join("");
}