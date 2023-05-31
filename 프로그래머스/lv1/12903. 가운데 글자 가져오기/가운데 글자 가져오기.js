function solution(s) {
    let temp;
    if (s.length % 2 != 0) {
        for (let i = 0; i < s.length; i++) {
            temp = s[Math.floor(s.length / 2)];
        }
        return temp;
    }
    else {
        for (let i = 0; i < s.length; i++) {
            temp = s[(s.length / 2) - 1] + s[s.length / 2] 
        }
        return temp;
    }
}