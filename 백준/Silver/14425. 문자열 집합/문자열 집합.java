import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String args[]) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] count = br.readLine().split(" ");
		int c1 = Integer.parseInt(count[0]);
		int c2= Integer.parseInt(count[1]);
		int result = 0;
		
		String[] arr1 = new String[c1];
		String[] arr2 = new String[c2];
		
		for(int i = 0; i < c1; i++) {
			arr1[i] = br.readLine();
		}
		for(int i = 0; i < c2; i++) {
			arr2[i] = br.readLine();
		}
		
		for(int i = 0; i < arr2.length; i++) {
			for (int j = 0; j < arr1.length; j++) {
				if(arr2[i].equals(arr1[j])) {
					result++;
				}
			}
		}
		System.out.print(result);
	}

}
