function solution(box, n) {
    let answer = 1;
    
    box.forEach(b => answer *= division(b, n));
    
    return answer;
}

function division(a, b) {
    return Math.floor(a / b);
}