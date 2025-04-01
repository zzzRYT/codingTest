
function solution(n) {
    let answer = honoi(1,2,3,n);
    return answer;
}

function honoi(x,y,z,n) {
    if (n===1) {
        return [[x,z]];
    } else if (n===2) {
        return [[x,y],[x,z],[y,z]];
    } else {
        return honoi(x,z,y,n-1).concat([[x,z]]).concat(honoi(y,x,z,n-1));
    }
} 
