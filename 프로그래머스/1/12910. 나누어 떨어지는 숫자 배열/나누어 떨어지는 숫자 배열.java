import java.util.*;

class Solution {
    public int[] solution(int[] arr, int divisor) {
        List<Integer> resultArr = new ArrayList<>();
        for(int ele: arr) {
            if(ele % divisor == 0) {
                resultArr.add(ele);
            }
        }
        if(resultArr.size() == 0) {
            resultArr.add(-1);
        }
        Collections.sort(resultArr);
        int[] answer = new int[resultArr.size()];
        for (int i = 0; i < resultArr.size(); i++) {
            answer[i] = resultArr.get(i);
        }
        return answer;
    }
}