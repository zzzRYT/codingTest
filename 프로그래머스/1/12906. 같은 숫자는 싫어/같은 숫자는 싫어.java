import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        Stack<Integer> stack = new Stack<Integer>();
        for(int i = 0; i < arr.length; i++) {
            if (stack.empty()) {
                if(stack.empty()) stack.push(arr[i]); 
            }else {
                if (stack.peek() != arr[i]) {
                    stack.push(arr[i]); 
                } else {
                    continue;
                }    
            }
        }
        int[] result = new int[stack.size()];
        for(int i = stack.size(); i > 0; i--) {
            result[i-1] = stack.pop();
        }
        return result;
    }
}