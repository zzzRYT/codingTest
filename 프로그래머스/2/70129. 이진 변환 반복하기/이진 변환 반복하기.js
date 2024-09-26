function solution(s) {
    let binary = 0;
    let count = 0;
    while(s.length > 1) {
        let temp = changeBinary(s, count);
        s = temp[0]
        count += temp[1]
        binary++;
    }
    return [binary, count]
}

function changeBinary(s) {
    let str = "";
    let newCount = 0;
    for (let item of s) { 
        if(item == "1") {
            str+=item
        } else {
            newCount++;
        }
    }
    return [str.length.toString(2), newCount]
}