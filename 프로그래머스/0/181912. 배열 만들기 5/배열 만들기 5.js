function solution(intStrs, k, s, l) {
    const answer = intStrs.map(str => str.slice(s, s + l) * 1);
    return answer.filter(i => i > k);
}