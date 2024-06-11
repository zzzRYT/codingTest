function solution(record) {
    const result = {};
    const log = [];
    record.map((data)=>{
        const member = data.split(' ');
        const action = member[0];
        const uid = member[1];
        const nickName = member[2];
        switch(action) {
            case "Enter":
                result[uid] = [action, nickName];
                break;
            case "Change":
                result[uid] = [action, nickName];
                break;
        }
    })
    record.map((data)=>{
        const member = data.split(' ');
        const action = member[0];
        const uid = member[1];
        switch(action) {
            case "Enter":
                log.push(`${result[uid][1]}님이 들어왔습니다.`);
                break;
            case "Leave":
                log.push(`${result[uid][1]}님이 나갔습니다.`);
                break;  
        }
    })
    return log;
}