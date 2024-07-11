function solution(a, b, c) {
    let cnt = same(a, b, c);
    let answer = a + b + c;
    
    if (cnt >= 1) {
        answer *= (square2(a) + square2(b) + square2(c));
    }
    if (cnt === 3) {
        answer *= (square3(a) + square3(b) + square3(c));
    }

    return answer;
}

function same(a, b, c) {
    let res = 0;
    
    if (a === b) res++;
    if (b === c) res++;
    if (c === a) res++;
    
    return res;
}

function square2(n) {
    return n * n;
}

function square3(n) {
    return n * n * n;
}