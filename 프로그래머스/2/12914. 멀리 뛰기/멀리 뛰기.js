function solution(n) {
  //1과 2가 나온다면, 그 수를 리턴
  if (n === 1 || n === 2) return n;
  //n의 수에 맞게 배열을 생성 (0으로 채움)
  const dp = Array(n).fill(0);
  const mod = 1234567; //마지막에 나눌 수
  dp[0] = 1; //첫 값 과 
  dp[1] = 2; //두 번째 값을 넣어줘야, 다음 경우의 수 구할 수 있음
  //n 인 경우의 수는 n - 1의 경우의 수와, n - 2경우의 수를 합 한 것과 같다
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
  }
  return dp[n - 1]; //배열에 계속 값을 쌓는 느낌으로, 마지막 배열을 호출
}