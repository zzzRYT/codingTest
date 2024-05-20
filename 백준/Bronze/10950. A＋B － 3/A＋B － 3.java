import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		ArrayList list = new ArrayList();
		
		int caseTest = sc.nextInt(); //caseTest의 개수입력
		int count = 0;
		int result = 0;
		while (count < caseTest) {
			int num1 = sc.nextInt();
			int num2 = sc.nextInt();
			list.add(count, num1 + num2);
			count++;
		}
		for (int i = 0;i<count;i++) {
			System.out.println(list.get(i));
		}
	}
}