function solution(N, stages) {
  const stageCnt = new Array(N + 2).fill(0);
  const failPercent = [];

  stages.forEach((stage) => {
    stageCnt[stage]++;
  });

  let totalPlayers = stages.length;

  for (let i = 1; i <= N; i++) {
    const playersOnStage = stageCnt[i];
    failPercent.push({
      stage: i,
      rate: playersOnStage / totalPlayers,
    });
    totalPlayers -= playersOnStage;
  }

  failPercent.sort((a, b) => {
    if (a.rate === b.rate) {
      return a.stage - b.stage;
    }
    return b.rate - a.rate;
  });

  return failPercent.map((obj) => obj.stage);
}