function solution(n) {
    let answer = 0;
    n.toString().split('').forEach(i => answer += Number(i));
    return answer;
}