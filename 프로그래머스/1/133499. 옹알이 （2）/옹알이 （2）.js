function solution(babbling) {
    let result = 0;
    const arr = babbling.map((data)=>{
        let temp = "";
        temp = data.replace(/aya/g, "1");
        temp = temp.replace(/ye/g, "2");
        temp = temp.replace(/woo/g, "3");
        temp = temp.replace(/ma/g, "4");
        if(!(temp.includes("11") || temp.includes("22") || temp.includes("33") || temp.includes("44")) && !isNaN(temp)) {result++}
        return temp;
    })
    return result;
}