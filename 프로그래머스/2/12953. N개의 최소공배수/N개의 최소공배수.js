function solution(arr) {
    const newArr = arr.sort((a,b)=>b-a)
    while(newArr.length > 1) {
        const num1 = newArr.pop();
        const num2 = newArr.pop();
        const gcd = Euclidean(num1, num2);
        newArr.push(num1 * num2 / gcd);

    }
    return newArr[0];
}

//유클리드 호재법
function Euclidean(a, b) {
    if(b === 0) {
        return a;
    } else if(a % b === 0) {
        return b;
    } else {
        return Euclidean(b, a%b);
    }
}

