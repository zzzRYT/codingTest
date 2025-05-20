function solution(players, callings) {
    const map = new Map();
    for (let i = 0; i < players.length; i++) {
        map.set(players[i], i);
    }
    
    for (let i = 0; i < callings.length; i++) {
        const aHeadPlayer = callings[i]; //kai
        const aHeadPlayerRank = map.get(aHeadPlayer); //3
        const caughtPlayer = players[aHeadPlayerRank - 1] //poe
        const caughtPlayerRank = map.get(caughtPlayer); //2

        [players[caughtPlayerRank], players[aHeadPlayerRank]] = [players[aHeadPlayerRank], players[caughtPlayerRank]];
        
        map.set(aHeadPlayer, caughtPlayerRank);
        map.set(caughtPlayer, aHeadPlayerRank);
    }
    
    return players
}