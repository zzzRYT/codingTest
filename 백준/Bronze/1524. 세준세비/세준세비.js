const fs = require('fs');
const file_path = process.platform === 'linux' ? 'dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(file_path).toString().trim();

/**
 * @param {string} input 
 * @returns 
 */
const solution = (input) => {
    const [num, ...wars] = input.replace(/\r/g, '').split('\n').filter(el => el);
    const rst_arr = [];
    for(let i = 0; i < wars.length; i+= 3) {
        const sejun = wars[i + 1].split(' ').map(el => Number(el));
        const sebi = wars[i + 2].split(' ').map(el => Number(el));
        Math.max(...sejun) >= Math.max(...sebi) ? rst_arr.push('S') : rst_arr.push('B');
    }
    return rst_arr.join('\n');
}

console.log(solution(input));