function solution(numbers) {
  let selectCount = numbers.length / 2;
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    if (selectCount <= 0) {
      return set.size;
    } else if (set.has(numbers[i])) {
      continue;
    } else {
      set.add(numbers[i]);
      selectCount--;
    }
  }
  return set.size;
}


