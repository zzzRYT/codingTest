function solution(survey, choices) {
    let result = "";
    const scoreObj = {
        "R":0,
        "T":0,
        "C":0,
        "F":0,
        "J":0,
        "M":0,
        "A":0,
        "N":0
    }
    for(let i = 0; i < survey.length; i++) {
        surveyFunc(scoreObj, survey[i], choices[i]);
    }
    result += compare(scoreObj, "R", "T");
    result += compare(scoreObj, "C", "F");
    result += compare(scoreObj, "J", "M");
    result += compare(scoreObj, "A", "N");
    return result;
}

const surveyFunc = (object, type, choice) => {

    const temp = type.split("");
    switch(choice) {
        case 1:
            object[temp[0]] += 3;
            break;
        case 2:
            object[temp[0]] += 2;
            break;
        case 3:
            object[temp[0]] += 1;
            break;
        case 4:
            break;
        case 5:
            object[temp[1]] +=1;
            break;
        case 6:
            object[temp[1]] += 2;
            break;
        case 7:
            object[temp[1]] += 3;
            break;
    }
}

const compare = (obj, f, s) => {
    let result = "";
    if(obj[f] > obj[s]) {
        result += f
    } else if(obj[f] < obj[s]) {
        result += s
    } else {
        result += f
    }
    return result;
}