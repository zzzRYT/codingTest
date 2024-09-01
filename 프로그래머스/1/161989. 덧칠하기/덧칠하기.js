//다른 사람 풀이 해석
//페인트 칠 한 위치를 찾아서 section의 값과 비교
//이게 가능한 이유가 어짜피, section의 값 부터 m까지의 거리만큼 칠을 진행하기 때문에
//다음 paint의 위치를 section+m-1을 통해서 정해주고, 그 값보다 작은 값이 있다면
//카운트를 넘겨버리면 되기 때문에, 이런식으로 코드 짜는게 가능
function solution(n, m, sections) {
    var answer = 0;
    var painted = 0;
    for(var section of sections) {
        if(painted < section) {
            answer++;
            painted = section+m-1;
        }
    }
    return answer;
}
