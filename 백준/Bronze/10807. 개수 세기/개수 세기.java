import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = 0; //정수 N개 선언
		int n = 0;	//개별 정수 n값 선언
		int v = 0; //특정 정수 v값 선언
		int v_cnt = 0;	//특정 정수 v값의 개수값 선언
		
		N = sc.nextInt(); //정수 N개 입력선언
		int[] N_list = new int[N];	//입력을 통해 배열의 크기 지정
		for(int i = 0;i<N_list.length;i++) {		//반복을 통해서 여러개 입력
			n = sc.nextInt(); //개별 정수 n값 입력
			N_list[i] = n;	//개별 정수 n 값을 배열에 저장
		}
		v = sc.nextInt();
		for (int i = 0;i<N_list.length;i++) {
			if(v == N_list[i]) {
				v_cnt += 1;
			}
		}
		System.out.println(v_cnt);
	}
}
