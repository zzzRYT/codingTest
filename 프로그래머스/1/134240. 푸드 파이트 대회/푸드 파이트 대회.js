function solution(food) {
    let player1 = "";
    let player2 = "";
    for(let i = 1; i < food.length; i++) {
        const temp = parseInt(food[i] / 2)
        for(let j = 0; j < temp; j++) {
            player1 += i;
        }
    }
    player2 = player1.split("").reverse().join("");
    return player1 + "0" + player2;
}