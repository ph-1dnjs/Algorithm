function solution(numbers, direction) {
    const len = numbers.length;
    
    if (direction === 'right') {
        return [numbers[len - 1], ...numbers.slice(0, len - 1)];
    } 
    return [...numbers.slice(1, len), numbers[0]];
}