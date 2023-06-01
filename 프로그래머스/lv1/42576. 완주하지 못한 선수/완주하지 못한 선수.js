function solution(participant, completion) {
    const a = {};
    for (let i = 0; i < participant.length; i++) {
        if(participant[i] in a) {
            a[participant[i]] += 1;
        } else{
            a[participant[i]] = 1;
        }
    }
    // console.log(a);
    for (let i = 0; i < completion.length; i++) {
        if (completion[i] in a) {
            a[completion[i]] -= 1;
            // console.log(1);
        }
            // console.log(a[participant[i]]);
    }
    // console.log(a);    
    for (let i = 0; i < participant.length; i++) {
        if (a[participant[i]] > 0) {
            // console.log(participant[i]);
            return participant[i];
        }
    }
    
    
}