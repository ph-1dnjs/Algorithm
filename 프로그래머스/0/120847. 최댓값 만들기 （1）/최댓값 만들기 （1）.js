function solution(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    })
    const len = numbers.length;
    return numbers[len-1] * numbers[len-2];
}