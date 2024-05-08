import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

class Solution {
    public String solution(int a, int b) {
        SimpleDateFormat format;
        Calendar cal = Calendar.getInstance();
        cal.set(2016, a-1,b);
        Date date = cal.getTime();
        format = new SimpleDateFormat("E");
        String result = format.format(date);
        return result.toUpperCase();
        
    }
}