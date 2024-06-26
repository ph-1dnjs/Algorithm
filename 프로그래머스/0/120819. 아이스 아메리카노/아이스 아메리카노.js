function solution(money) {
    const cup = Math.floor(money/5500);
    return [cup, money - (cup * 5500)];
}