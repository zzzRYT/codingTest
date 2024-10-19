import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int priceAll = sc.nextInt();	//총금액
		int priceCount = sc.nextInt();	//총 개수
		int count = 0;			//조건식 while문을 위한 변수 count
		int result = 0;			//가격을 더한 계산값
		while (count < priceCount) {
			int eachPrice = sc.nextInt();	//각 가격 입력
			int eachCount = sc.nextInt();	//각 개수 입력
			result += (eachPrice*eachCount);
			count++;
		}
		if(priceAll == result) {
			System.out.println("Yes");
		}
		else {
			System.out.println("No");
		}
	}
}