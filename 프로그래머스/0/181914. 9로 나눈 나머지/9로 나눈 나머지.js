function solution(number) {
    let sum = 0;
    
    number.split('').forEach(n => sum += (n * 1));

    return sum % 9;
}