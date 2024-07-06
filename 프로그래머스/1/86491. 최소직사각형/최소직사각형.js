function solution(sizes) {
    //가장 큰 크기의 명함을 만들려면, 가로 80, 세로 70 이지만,
    //가장큰, 70의 가로가 30이기 때문에, 다음 크기인 50으로 만들어도 수납이 가능
    //그럼 40으로 만들면 되는거 아닌가? 40으로 해도 다 들어갈 것 같은데...?
    
    //가로, 세로 중 가장 큰 값을 판별, 
    //각 가장 큰 값중에서 세로, 가로 방향의 크기가, 2번째로 큰 크기도다 작다면, 2번째 크기를 결정
    
    //다시
    //작은크기의 지갑을 생성한 뒤, 맞는 크기가 없다면 새롭게 지갑을 생성 -> 반복
    
    //10 7 , 12 3, 15 8, 14 7, 15 5
    
    let maxWidth = 0;
    let maxHeight = 0;
    sizes.map((data)=>{
        if(data[0] > data[1]) {
            maxWidth = maxWidth < data[0] ? data[0] : maxWidth; 
            maxHeight = maxHeight < data[1] ? data[1] : maxHeight;
        } else {
                        maxWidth = maxWidth < data[1] ? data[1] : maxWidth; 
            maxHeight = maxHeight < data[0] ? data[0] : maxHeight;
        }
    })
    return maxWidth * maxHeight;
}