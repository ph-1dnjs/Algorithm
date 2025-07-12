function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a) {
        let c = Math.floor(n / a);
        answer += (c * b);
        n = n - (c * a) + (c * b);
    }
    
    return answer;
}