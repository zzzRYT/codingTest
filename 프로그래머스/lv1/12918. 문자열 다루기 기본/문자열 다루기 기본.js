function solution(s) {
    if (s.length === 4 || s.length === 6) {
        if (s === '0000' || s === '000000') {
            return true;
        }else {
            if (s.includes('e')) {
                return false;
            }
            return Boolean(Number(s));
        }
    }
    else {
        return false;
    }
}