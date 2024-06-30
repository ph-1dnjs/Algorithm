function solution(a, b) {
    const answer1 = Number('' + a + b);
    const answer2 = Number('' + b + a);
    return answer1 > answer2 ? answer1 : answer2;
}