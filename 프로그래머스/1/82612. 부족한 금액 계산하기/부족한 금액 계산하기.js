function solution(price, money, count) {
    let total = 0;
    for(let i = 1; i <= count; i++) {
        total = total + (price * i);
    }
    return total<money ? 0 : total-money;
}