// function solution(absolutes, signs) {
//     let arr = [];
//     let total = 0;
//     for (let i = 0; i < absolutes.length; i++){
//         if (signs[i] === true) {
//             arr.push(absolutes[i]);
//         } else {
//             arr.push(((-2)*absolutes[i]) + absolutes[i]);
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         total = total + arr[i];
//     }
//     return total;
// }

function solution(absolutes, signs) {
    const pm = absolutes.reduce((acc, cur, idx) => {
        if(signs[idx] === false) {
            return acc + (cur * (-1));
        } else if (signs[idx] === true) {
            return acc + (cur * 1);
        }
        // console.log(acc);
    }, 0);
    return pm;
}
    // const result = absolutes.reduce((acc, cur, idx) => {
    //       if(cur*pm[idx] < 0){
    //         // 처리할 현재 요소가 음수일 경우
    //         acc.push(cur*arr[idx]);
    //       }
    //       else if(cur*pm[idx] > 0){
    //         // 처리할 현재 요소가 양수일 경우
    //         acc.push(cur*arr[idx]);
    //       }
    //       return acc;
    // });