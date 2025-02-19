function solution(wallpaper) {
    const lw = getLocationWallpaper(wallpaper);
    const ans = getDrag(lw);
    return ans;
}

function getLocationWallpaper(wallpaper) {
    const lw = [];
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === "#") {
                lw.push([i, j])
            }
        }
    }
    return lw;
}

function getDrag(arr) {
    let minX = 51;
    let maxX = 0;
    let minY = 51;
    let maxY = 0;
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i][0];
        const y = arr[i][1];
        if (x > maxX) maxX = x;
        if (x < minX) minX = x;
        if (y > maxY) maxY = y;
        if (y < minY) minY = y;
    }
    return [minX, minY, maxX+1, maxY+1];
}