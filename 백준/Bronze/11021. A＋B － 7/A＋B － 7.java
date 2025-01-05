import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in); //입력함수
		ArrayList list = new ArrayList();	//리스트
		
		//변수 선언
		int caseCount = 0; //개수 입력 변수
		int count = 0; //while문 초기값 변수
		int num1 = 0;	//입력할 숫자1 변수
		int num2 = 0;	//입력할 숫자2 변수
		//while문 작성
		caseCount = sc.nextInt();
		while (count < caseCount) {
			num1 = sc.nextInt();	//더하는 수1 입력
			num2 = sc.nextInt();	//더하는 수2 입력
			list.add(count, num1+num2);	//num1 + num2 값을 list에 넣음
			count++;	//증감식
		}
		//for문작성
		//for문을 통해서 리스트에 저장한 num1 + num2 값을 뽑기
		for (int i = 0;i<caseCount;i++) {
			System.out.printf("Case #%d: %d\n",i+1,list.get(i));
		}
	}
}