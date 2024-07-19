function solution(number, limit, power) {
    let kg = 0;
    for(let i = 1; i <= number; i++) {
      kg+=divisorFunc(i, limit ,power);
    }
    return kg;
}

//약수의 개수 구하기
function divisorFunc(number, limit, power) {
    let count = 0;
    for(let i = 1;i <= Math.sqrt(number);i++) {
        if( number % i === 0) {
            count++
            if (i !== number / i) count++;
        };
        if(count > limit) return power;
    }
    return count;
}