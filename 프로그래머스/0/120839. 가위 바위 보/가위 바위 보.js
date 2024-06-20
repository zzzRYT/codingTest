function solution(rsp) {
    let temp = "";
    const arr = rsp.split('');
    arr.map((data)=>{
        switch(data) {
            case "0":
                temp+="5" //temp = temp + "5";
                break;
            case "2":
                temp+="0"
                break;
            case "5":
                temp+="2";
                break;
        }
    })
    return temp;
}