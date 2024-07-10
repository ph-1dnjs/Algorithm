function solution(num, k) {
    const answer = num.toString().indexOf(k.toString());
    return answer < 0 ? answer : answer + 1;
}