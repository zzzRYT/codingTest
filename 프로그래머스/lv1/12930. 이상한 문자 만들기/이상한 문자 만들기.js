function solution(s) {
    const str1 = s.toUpperCase();
    const temp = str1.split(' ');
    // console.log(temp);
    const arr = [];
    let count = 0;
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            // console.log(count);
            if (j % 2 === 0) {
                arr[count] = temp[i][j];
            } else {
                arr[count] = temp[i][j].toLowerCase();
            }
            count++;
        }
        if (count < s.length){
            arr.push(" ");
            count++; 
        }
    }
    return arr.join('');
    // console.log(arr.join(''));
}