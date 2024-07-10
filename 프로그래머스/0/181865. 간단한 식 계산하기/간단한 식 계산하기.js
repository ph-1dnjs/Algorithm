function solution(binomial) {
    let [a, type, b] = binomial.split(' ');
    
    a *= 1;
    b *= 1;
    
    switch (type) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
    }
}