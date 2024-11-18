function solution(n,a,b){
    let answer = 1;

    while(a!=b){
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        answer ++;

        if(a===b){
            answer--;
        }
    }
    return answer;
}