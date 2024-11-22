const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

input.shift();

console.log(
        input
                .map((v) => v.split(' '))
                .sort((a, b) => +a[0] - +b[0])
                .map((v) => v.join(' '))
                .join('\n')
);