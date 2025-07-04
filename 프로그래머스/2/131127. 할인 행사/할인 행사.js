function solution(want, number, discount) {
    const wantMap = {};
    for (let i = 0; i < want.length; i++) {
        wantMap[want[i]] = number[i];
    }

    let count = 0;

    for (let i = 0; i <= discount.length - 10; i++) {
        const window = discount.slice(i, i + 10);
        const windowMap = {};

        for (let item of window) {
            windowMap[item] = (windowMap[item] || 0) + 1;
        }

        let isMatch = true;
        for (let item in wantMap) {
            if (windowMap[item] !== wantMap[item]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) count++;
    }

    return count;
}
