function solution(s){
    let countp = 0;
    let county = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'p' || s[i] == 'P') {
            countp = countp + 1;
        }
        else if (s[i] == 'y' || s[i] == 'Y') {
            county = county + 1;
        }
    }
    if (countp == county) {
        return true;
    }else {
        return false;
    }
}