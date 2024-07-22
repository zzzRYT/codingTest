function solution(s) {
    let letter = [];
    let sArr = s.split("");
    while(sArr.length > 0) {
        const temp = shiftLetter(sArr);
        letter.push(temp[0]);
        sArr = temp[1]; 
    }
    return letter.length;
}

function shiftLetter(sArr) {
    let firstLetterCount = 1;
    let nextLetterCount = 0;
    const firstLetter = sArr.shift();
    let resultLetter = firstLetter;
    while(firstLetterCount !== nextLetterCount) {
        const nextLetter = sArr.shift();
        if(sameLetter(firstLetter, nextLetter)) {
            firstLetterCount++;
            resultLetter += firstLetter;
        } else {
            nextLetterCount++;
            resultLetter += nextLetter
        }
    }
    return [resultLetter, sArr];   
}

function sameLetter(fLetter, sLetter) {
    return fLetter === sLetter ? true : false;
}