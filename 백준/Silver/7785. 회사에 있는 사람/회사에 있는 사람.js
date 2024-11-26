const input = require('fs').readFileSync(0).toString().trim().split('\n').map(i => i.split(' '));

const n = input.shift();
const map = new Map(input.map((el) => [el[0], el[1]]));

const result = [];

map.forEach((v, el) => {
    if (map.get(el) === 'leave') map.delete(el);
    else result.push(el);
})

result.sort().reverse();

console.log(result.join('\n'));