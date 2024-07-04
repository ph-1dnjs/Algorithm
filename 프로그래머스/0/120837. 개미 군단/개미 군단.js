function solution(hp) {
    let answer = 0;
    let attack = [5, 3, 1];
    
    for (let i = 0; hp !== 0; i++) {
        answer += Math.floor(hp / attack[i]);
        hp %= attack[i];
    }
    
    return answer;
}