function solution(n) {
    let answer = Math.floor(n / 7);
    if(n % 7 > 0) {
        answer++;
    }
    return answer;
}