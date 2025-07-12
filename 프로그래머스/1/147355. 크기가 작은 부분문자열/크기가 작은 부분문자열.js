function solution(t, p) {
    let answer = 0;
    
    while (t.length >= p.length) {
        if (t.slice(0, p.length) <= p) answer++;
        t = t.slice(1, t.length);
    }
    
    return answer;
}