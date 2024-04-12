function solution(n) {
    const resultArr = String(n).split('').sort(function(a, b) {
  if(a < b) return 1;
  if(a > b) return -1;
  if(a === b) return 0;
});
    return parseInt(resultArr.join(''));
}