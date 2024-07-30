function solution(s) {
    const result = [];
    let letter = "";
    for(let i = 0; i < s.length; i++) {
        result.push(sameLetterLocation(letter, s[i]));
        letter+=s[i];
    }
    return result;
}

function sameLetterLocation(string, letter) {
    let max = -1;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === letter) {
            max = string.length - i;
        }
    }
    return max;
}