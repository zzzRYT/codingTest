function solution(n) {
    const trinary = (n.toString(3) + "").split('').reverse();
    const decimal = parseInt(trinary.join(''), 3);
    return decimal;
}