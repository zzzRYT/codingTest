function solution(today, terms, privacies) {
    const destroyDate = [];
    const obj = changeObject(terms);
    privacies.map((data)=>{
        const date = data.split(" ");
        const destroy = termsDate(obj[date[1]], date[0]);
        destroyDate.push(destroy);
    })
    return findDestroyDate(today, destroyDate);
}

//배열 => 객체 변환
function changeObject(arr) {
    const temp = arr.map((data)=>{
        return data.split(" ");
    })
    return Object.fromEntries(temp);
}

//파기 날짜 구하는 함수
function termsDate(termsMonth, privaciesDate) {
    const date = privaciesDate.split(".");
    let month = Number(date[1]);
    let year = Number(date[0]);
    let day = Number(date[2]) - 1;
    month += Number(termsMonth);
    if (month>12) {
        year += Math.floor(month / 12);
        month = (month % 12);
    }
    if(day > 28) {
        month += 1;
        day = day - 28;
    }
    if(day <= 0) {
        month -= 1;
        day = 28 - day;
    }
    if(month <= 0) {
        year -= 1;
        month = 12;
    }
    return `${(year)}.${month}.${day}`;
}

//파기 필요한 날짜 구하는 함수
function findDestroyDate(today, dateArr) {
    const toDate = new Date(today);
    const destroyArr = [];
    dateArr.map((data, idx)=>{
        const newDate = new Date(data);
        if(toDate > newDate) {
            destroyArr.push(idx+1);
        }
    })
    return destroyArr;
}