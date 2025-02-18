const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0].trim());
const sequence = input[1].trim().split(' ').map(Number);

// parents[i] will store the index of the previous element in the LIS ending at i.
const parents = new Array(n).fill(-1);
// lisIndices will store indices of the smallest possible tail element of an increasing subsequence of given length.
const lisIndices = [];

for (let i = 0; i < n; i++) {
  const num = sequence[i];
  
  if (lisIndices.length === 0 || sequence[lisIndices[lisIndices.length - 1]] < num) {
    if (lisIndices.length > 0) {
      parents[i] = lisIndices[lisIndices.length - 1];
    }
    lisIndices.push(i);
  } else {
    let left = 0;
    let right = lisIndices.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sequence[lisIndices[mid]] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    lisIndices[left] = i;
    if (left > 0) {
      parents[i] = lisIndices[left - 1];
    }
  }
}

const lisLength = lisIndices.length;
let result = [];

// Reconstruct the sequence by following parent pointers from the last element of the LIS.
let index = lisIndices[lisIndices.length - 1];
while (index !== -1) {
  result.push(sequence[index]);
  index = parents[index];
}
result.reverse();

console.log(lisLength);
console.log(result.join(" "));
