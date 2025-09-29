const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'LJJ/baekjoon/input.txt';
const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');

const [N, C] = input[0].split(' ').map(Number);
const weights = input[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = 0;

// ① 1개 선택
for (let i = 0; i < N; i++) {
  if (weights[i] === C) {
    answer = 1;
    break;
  }
}

// ② 2개 선택 (투 포인터 방식)
if (answer === 0) {
  let left = 0;
  let right = N - 1;
  while (left < right) {
    const sum = weights[left] + weights[right];
    if (sum === C) {
      answer = 1;
      break;
    } else if (sum < C) {
      left++;
    } else {
      right--;
    }
  }
}

// ③ 3개 선택 (한 개 고정 + 투 포인터)
if (answer === 0) {
  for (let i = 0; i < N; i++) {
    let left = i + 1;
    let right = N - 1;
    while (left < right) {
      const sum = weights[i] + weights[left] + weights[right];
      if (sum === C) {
        answer = 1;
        break;
      } else if (sum < C) {
        left++;
      } else {
        right--;
      }
    }
    if (answer === 1) break;
  }
}

console.log(answer);
