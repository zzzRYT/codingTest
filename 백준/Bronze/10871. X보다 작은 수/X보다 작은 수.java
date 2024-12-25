import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		//변수 선언
		int N = 0; //배열의 수
		int X = 0; //A의 비교 대상 입력
		int A = 0; //각 입력할 수
		
		N = sc.nextInt();	//배열의 수 입력
		X = sc.nextInt();	//A비교
		int[] N_list = new int[N]; //배열 선언
		for (int i = 0;i<N_list.length;i++) {
			A = sc.nextInt();
			N_list[i] = A;
		}
		for (int i = 0;i<N_list.length;i++) {
			if(N_list[i] < X) {
				System.out.print(N_list[i]+" ");
			}
		}
	}
}