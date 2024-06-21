function solution(nums) {
    let count = 0;
    let temp = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                temp = nums[i] + nums[j] + nums[k];
                if(minority(temp)) count++;
            }
        }
    }
    return count;
}

function minority(num) {
    for (let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}