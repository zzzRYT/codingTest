function solution(s) {
    const arr = s.split("");
    const stack = [];
    arr.map((letter)=>{
        if(letter === getLastElement(stack)) {
            stack.pop();
        } else {
            stack.push(letter);
        }
    })
    if(stack.length !== 0) {
        return 0;  
    } else {
        return 1;
    }
}

function getLastElement(arr) {
    if (arr.length > 0) {
        return arr[arr.length - 1];
    } else {
        return null; // 배열이 비어있을 경우
    }
}