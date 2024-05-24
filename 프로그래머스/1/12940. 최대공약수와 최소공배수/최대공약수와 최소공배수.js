function solution(n, m) {
    return [gcd(n,m), lcm(n, m)];
}

//a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수를 나눈 것과 같다. 는 성질 이용

//최대공약수
function gcd(a, b) {
  let r
  while (b != 0) {
    r = a % b
    a = b
    b = r
  }
  return a
}

//최소공배수
function lcm(a, b) {
    return (a * b) / gcd(a, b)
}
