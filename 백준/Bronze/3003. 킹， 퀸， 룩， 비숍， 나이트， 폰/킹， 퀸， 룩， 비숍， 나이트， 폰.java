import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
		// TODO Auto-generated method stub
        int[] fullset = {1, 1, 2, 2, 2, 8};
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
               
        String n[] = br.readLine().split(" ");
        int[] resultArr = new int[6];
        
        for(int i = 0; i < 6; i++) {
        	resultArr[i] = fullset[i] - Integer.parseInt(n[i]);
        }
        
        for(int i = 0; i < 6; i++) {
        	System.out.print(resultArr[i]+ " ");
        }
	}

}
