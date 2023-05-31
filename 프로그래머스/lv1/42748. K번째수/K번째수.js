function solution(array, commands) {
    let temp;
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        temp = array.slice(commands[i][0]-1, commands[i][1]);
        temp.sort((a, b)=>a-b);
        result.push(temp[commands[i][2]-1]);
    }
    return result;
}