import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        //변수 선언
        int length = 0;    //배열 길이 변수
        int length_N = 0;   //배열안에 들어갈 입력 변수
        int max = -1000000;    //최대값 변수
        int min = 1000000;    //최소값 변수
        //배열값의 길이가 될 입력선언
        length = sc.nextInt();
        //배열선언
        int[] arr = new int[length];    //입력을 통해 배열 길이 할당
        
        for (int i =0;i<arr.length;i++) {    //배열 길이만큼 입력넣기 위해
            length_N = sc.nextInt();
            arr[i] = length_N;
            if (length_N > max){
                max = length_N;
            }
            if (length_N < min) {
                min = length_N;
            }
        }
        System.out.println(min +" "+ max);
        
    }
}
