function solution(slice, n) {
    let answer = Math.floor(n / slice);
    console.log()
    if(n % slice !== 0) {
       answer++;
    }
    return answer;
}