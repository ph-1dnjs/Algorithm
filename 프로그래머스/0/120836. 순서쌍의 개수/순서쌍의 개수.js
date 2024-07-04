function solution(n) {
    const measure = [];
    
    for (let i = 1; i <= n; i++) {
        if(n % i === 0) {
            measure.push(i);
        }
    }
    
    let answer = 0;
    
    measure.forEach(num => {
        for (let i = 0; i < measure.length; i++) {
            if (num * measure[i] === n) {
                answer++;
            }
        }
    })
    
    return answer;
}