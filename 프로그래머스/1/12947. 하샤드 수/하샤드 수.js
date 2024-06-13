function solution(x) {
    const tempNum = String(x).split('').reduce((acc, cur)=>parseInt(acc)+parseInt(cur));
    return x % tempNum === 0 ? true : false;
}