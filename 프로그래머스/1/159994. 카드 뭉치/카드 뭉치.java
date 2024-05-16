import java.util.Queue;
import java.util.LinkedList;
import java.util.Arrays;

class Solution {
    public String solution(String[] cards1, String[] cards2, String[] goal) {
        String answer = "";
        String[] result = new String[goal.length];
        Queue<String> cq1 = new LinkedList<>();
        Queue<String> cq2 = new LinkedList<>();
        
        for(String ele: cards1) {
            cq1.add(ele);
        }
        for(String ele: cards2) {
            cq2.add(ele);
        }
        for(int i = 0; i < goal.length; i++) {
            if(goal[i].equals(cq1.peek())) {
                result[i] = cq1.remove(); 
            } 
            if(goal[i].equals(cq2.peek())){
                result[i] = cq2.remove();
            }
        }
        if(Arrays.equals(result, goal)) {
            answer = "Yes";
        } else {
            answer = "No";
        }
        return answer;
    }
}