function solution(a, b) {
    if (isOdd(a) && isOdd(b)) {
        return (a * a) + (b * b);
    } else if (isOdd(a) || isOdd(b)) {
        return 2 * (a + b);
    } 
    return Math.abs(a - b);
}
    
function isOdd(n) {
    return n % 2 !== 0;
}