class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        String answer = "";
        int count = 0;
        for(int i = 0; i < my_string.length(); i++) {
            if(i < s) {
                answer += my_string.charAt(i);
            }
            else if(i >= s && i < s + overwrite_string.length()){
                answer += overwrite_string.charAt(count);
                count++;
            } else {
                answer += my_string.charAt(i);
            }
        }
        return answer;
    }
}