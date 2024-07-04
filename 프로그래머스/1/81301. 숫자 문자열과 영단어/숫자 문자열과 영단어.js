function solution(s) {
    s = s.replaceAll(/zero/gi, "0");
    s = s.replaceAll(/one/gi, "1");
    s = s.replaceAll(/two/gi, "2");
    s = s.replaceAll(/three/gi, "3");
    s = s.replaceAll(/four/gi, "4");
    s = s.replaceAll(/five/gi, "5");
    s = s.replaceAll(/six/gi, "6");
    s = s.replaceAll(/seven/gi, "7");
    s = s.replaceAll(/eight/gi, "8");
    s = s.replaceAll(/nine/gi, "9");
    return Number(s);
}