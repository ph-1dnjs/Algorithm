function solution(a, d, included) {
    let answer = 0;
    
    included.forEach((i, idx) => {
        if (i) {
            answer += (a + (d * idx));
        }
    })
    
    return answer;
}