function solution(s, n) {
    const arr = s.split('');
    const resultArr = arr.map((data, idx)=>{
        let ascii = data.charCodeAt();
        if(ascii >= 65 && ascii <= 90) {
            if(ascii + n > 90) {
                return String.fromCharCode((ascii + n) - 26);
            }
            return String.fromCharCode(ascii + n);
        }
        if (ascii >= 97 && ascii <= 122) {
            if(ascii + n > 122) {
                return String.fromCharCode((ascii + n) - 26);
            }
            return String.fromCharCode(ascii + n);
        }
        if (ascii === 32) {
            return ' ';
        }
    })
    return resultArr.join('');
}