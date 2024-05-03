class Solution {
    public long solution(int a, int b) {
        long sum = 0;
        long top = 0;
        long bottom = 0;
        if(a > b) {
            top = a;
            bottom = b;
        } else {
            top = b;
            bottom = a;
        }
        for(long i = bottom;i <= top;i++) {
            sum+=i;
        }
        return sum;
    }
}