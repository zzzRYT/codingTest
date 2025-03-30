function solution(park, routes) {
    let location = getNowLocation(park);
    for (let i = 0; i < routes.length; i++) {
        const [orientation, moves] = routes[i].split(" ");
        const temp = toLocation(orientation, Number(moves), location, park)
        location = [...temp];
    }
    return location;
}

function getNowLocation(arr) {
    const location = [0, 0];
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i].split("");
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] === 'S') {
                location[0] = i;
                location[1] = j;
                return location;
            }
        }
    }
}

function toLocation(orientation, moves, nowLocation, park) {
    const nextLocation = [...nowLocation];
    switch(orientation) {
        case "E":
            nextLocation[1] += moves;
            if (isOutOfBounds(nextLocation, park) || !isConditionsToPlus(park, nowLocation, nextLocation)) return nowLocation;
            break;
        case "W":
            nextLocation[1] -= moves;
            if (isOutOfBounds(nextLocation, park) || !isConditionsToMinus(park, nowLocation, nextLocation)) return nowLocation;
            break;
        case "N":
            nextLocation[0] -= moves;
            if (isOutOfBounds(nextLocation, park) || !isConditionsToMinus(park, nowLocation, nextLocation)) return nowLocation;
            break;
        case "S":
            nextLocation[0] += moves;
            if (isOutOfBounds(nextLocation, park) || !isConditionsToPlus(park, nowLocation, nextLocation)) return nowLocation;
            break;
    }
    return nextLocation;
}

function isConditionsToPlus(park, startLocation, nextLocation) {
    const parkArr = park.map(row => row.split(""));

    if (startLocation[0] === nextLocation[0]) { 
        for (let x = startLocation[1]; x <= nextLocation[1]; x++) {
            if (parkArr[startLocation[0]][x] === 'X') return false;
        }
    } else {
        for (let y = startLocation[0]; y <= nextLocation[0]; y++) {
            if (parkArr[y][startLocation[1]] === 'X') return false;
        }
    }
    return true;
}

function isConditionsToMinus(park, startLocation, nextLocation) {
    const parkArr = park.map(row => row.split(""));

  
    if (startLocation[0] === nextLocation[0]) { 
        for (let x = startLocation[1]; x >= nextLocation[1]; x--) {
            if (parkArr[startLocation[0]][x] === 'X') return false;
        }
    } else { 
        for (let y = startLocation[0]; y >= nextLocation[0]; y--) {
            if (parkArr[y][startLocation[1]] === 'X') return false;
        }
    }
    return true;
}

function isOutOfBounds(nextLocation, park) {
    const height = park.length;
    const width = park[0].length;
    return nextLocation[0] < 0 || nextLocation[0] >= height || nextLocation[1] < 0 || nextLocation[1] >= width;
}

